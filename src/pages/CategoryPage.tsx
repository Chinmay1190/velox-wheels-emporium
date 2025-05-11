
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { setupScrollAnimation } from "@/lib/animate-utils";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState(getProductsByCategory(categoryId || ''));
  
  const categoryTitles: Record<string, string> = {
    'superbike': 'Superbikes',
    'supercar': 'Supercars',
    'luxury-car': 'Luxury Cars',
    'classic': 'Classic Vehicles'
  };
  
  const categoryDescriptions: Record<string, string> = {
    'superbike': 'Experience the thrill of speed with our premium collection of superbikes from leading manufacturers worldwide.',
    'supercar': 'Discover engineering excellence with our selection of exotic supercars that redefine automotive performance.',
    'luxury-car': 'Indulge in unparalleled luxury and sophistication with our premium collection of luxury automobiles.',
    'classic': 'Explore timeless elegance with our collection of classic vehicles that represent automotive heritage.'
  };
  
  const categoryImages: Record<string, string> = {
    'superbike': 'https://images.unsplash.com/photo-1580310728519-1af582f834d8?q=80&w=1170&auto=format&fit=crop',
    'supercar': 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1074&auto=format&fit=crop',
    'luxury-car': 'https://images.unsplash.com/photo-1631295387526-d9156650d2a3?q=80&w=1257&auto=format&fit=crop',
    'classic': 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?q=80&w=1171&auto=format&fit=crop'
  };
  
  useEffect(() => {
    // Update products when category changes
    setProducts(getProductsByCategory(categoryId || ''));
    
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, [categoryId]);
  
  return (
    <main>
      {/* Hero section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={categoryImages[categoryId || 'superbike']}
          alt={categoryTitles[categoryId || 'superbike']}
          className="object-cover w-full h-full object-center"
        />
        
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="luxury-container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {categoryTitles[categoryId || 'superbike']}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {categoryDescriptions[categoryId || 'superbike']}
            </p>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <section className="luxury-container py-16">
        {products.length > 0 ? (
          <>
            <div className="text-sm breadcrumbs mb-8">
              <ul className="flex items-center space-x-2">
                <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span>{categoryTitles[categoryId || 'superbike']}</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold">{products.length} products</h2>
            </div>
            
            <div className="product-grid">
              {products.map((product, index) => (
                <div key={product.id} className="animate-on-scroll">
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-muted-foreground">
              We couldn't find any products in this category. Please check back later.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
