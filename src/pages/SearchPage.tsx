
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState(products);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(products);
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = products.filter((product) => {
        const searchText = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchText) ||
          product.description.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          product.brand.toLowerCase().includes(searchText)
        );
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
      performSearch(searchQuery);
    }
  };
  
  return (
    <div className="luxury-container py-16">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>
      
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-12">
        <Input
          type="search"
          placeholder="Search for vehicles by name, brand, category..."
          className="pr-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button 
          type="submit"
          size="sm" 
          className="absolute right-1 top-1 h-8"
          disabled={isSearching}
        >
          <Search size={18} />
        </Button>
      </form>
      
      {isSearching ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Searching for products...</p>
        </div>
      ) : (
        <>
          {initialQuery && (
            <div className="mb-8">
              <h2 className="text-lg font-medium">
                {searchResults.length === 0
                  ? `No results found for "${initialQuery}"`
                  : `${searchResults.length} results found for "${initialQuery}"`}
              </h2>
            </div>
          )}
          
          {searchResults.length > 0 ? (
            <div className="product-grid">
              {searchResults.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            initialQuery && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try using different keywords or browse our categories.
                </p>
                <Button onClick={() => navigate("/shop")}>Browse All Products</Button>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
