
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BadgeIndianRupee } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Card 
      className={`card-hover overflow-hidden border-0 shadow-md dark:shadow-gray-800/10 ${
        isImageLoaded ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden">
        <div className="h-52 md:h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
          {!isImageLoaded && (
            <div className="h-full w-full animate-pulse bg-gray-200 dark:bg-gray-800"></div>
          )}
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        
        {product.featured && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs py-1 px-2 rounded-full font-medium">
            Featured
          </span>
        )}
        
        {!product.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Coming Soon</p>
          </div>
        )}
      </Link>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              to={`/product/${product.id}`} 
              className="text-lg font-semibold line-clamp-1 hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{product.brand}</p>
          </div>
          <div className="flex items-center text-lg font-bold">
            <BadgeIndianRupee size={16} className="inline mr-1" />
            <span className="text-base md:text-lg">{formatPrice(product.price).replace('₹', '')}</span>
          </div>
        </div>
        
        <div className="mt-2">
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {product.engineSize && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              {product.engineSize}
            </span>
          )}
          {product.horsepower && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              {product.horsepower} HP
            </span>
          )}
          {product.topSpeed && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              {product.topSpeed} km/h
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            if (product.available) {
              addToCart(product);
            }
          }}
          variant={product.available ? "default" : "outline"} 
          size="sm"
          className="w-full mt-2 font-medium"
          disabled={!product.available}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.available ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
