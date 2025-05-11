
import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { setupScrollAnimation } from "@/lib/animate-utils";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);
  
  return (
    <section className="luxury-container py-16">
      <div className="text-center mb-10 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our handpicked selection of premium vehicles that represent the pinnacle of engineering and luxury.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, index) => (
          <div key={product.id} className="animate-on-scroll">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
