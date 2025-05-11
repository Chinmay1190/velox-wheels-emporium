
import React, { useState, useEffect } from "react";
import { products, getProductsByCategory, getProductsByBrand } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { setupScrollAnimation } from "@/lib/animate-utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState<string>('all');
  const [brand, setBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { id: 'superbike', name: 'Superbikes' },
    { id: 'supercar', name: 'Supercars' },
    { id: 'luxury-car', name: 'Luxury Cars' },
    { id: 'classic', name: 'Classics' },
  ];

  const brands = [
    'Ducati',
    'BMW',
    'Kawasaki',
    'Honda',
    'Yamaha',
    'Lamborghini',
    'Ferrari',
    'Bugatti',
    'Porsche',
    'McLaren',
    'Rolls-Royce',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Jaguar',
  ];

  useEffect(() => {
    // Filter products based on selected filters
    let result = [...products];

    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }

    if (brand !== 'all') {
      result = result.filter(product => product.brand === brand);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you'd have a date field to sort by
        // For now, we'll just shuffle the array
        result.sort(() => Math.random() - 0.5);
        break;
      default:
        // Featured - put featured products first
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    setFilteredProducts(result);
    
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, [category, brand, sortBy]);

  return (
    <main>
      {/* Hero section */}
      <div className="relative h-[30vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop"
          alt="Shop Banner"
          className="object-cover w-full h-full object-center"
        />
        
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="luxury-container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our extensive catalog of premium vehicles for every enthusiast.
            </p>
          </div>
        </div>
      </div>
      
      {/* Product filters and grid */}
      <section className="luxury-container py-16">
        <div className="text-sm breadcrumbs mb-8">
          <ul className="flex items-center space-x-2">
            <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span>Shop</span>
            </li>
          </ul>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-auto">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} results
          </p>
        </div>
        
        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-on-scroll">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-muted-foreground">
              Try changing your filters to find products.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ShopPage;
