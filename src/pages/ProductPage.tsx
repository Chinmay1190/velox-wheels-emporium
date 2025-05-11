
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, formatPrice, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  BadgeIndianRupee,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { setupScrollAnimation } from "@/lib/animate-utils";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const product = getProductById(productId || '');
  
  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
    
    // Get related products (same category)
    if (product) {
      const categoryProducts = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(categoryProducts);
    }
    
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, [productId, product]);
  
  if (!product) {
    return (
      <div className="luxury-container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop">
          <Button>
            <ArrowLeft size={18} className="mr-2" />
            Back to Shop
          </Button>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };
  
  return (
    <main className="pt-16">
      <div className="luxury-container py-16">
        <div className="text-sm breadcrumbs mb-8">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/shop" className="text-muted-foreground hover:text-primary">Shop</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link 
                to={`/category/${product.category}`} 
                className="text-muted-foreground hover:text-primary"
              >
                {product.category === "superbike" ? "Superbikes" :
                 product.category === "supercar" ? "Supercars" :
                 product.category === "luxury-car" ? "Luxury Cars" : "Classics"}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="truncate max-w-[150px]">{product.name}</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div className="animate-on-scroll">
            <ProductGallery mainImage={product.imageUrl} productName={product.name} />
          </div>
          
          {/* Product Info */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center text-2xl font-bold text-primary mb-4">
              <BadgeIndianRupee size={20} className="inline mr-1" />
              <span>{formatPrice(product.price).replace('₹', '')}</span>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.brand && (
                <div>
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <p className="font-medium">{product.brand}</p>
                </div>
              )}
              
              {product.engineSize && (
                <div>
                  <span className="text-sm text-muted-foreground">Engine</span>
                  <p className="font-medium">{product.engineSize}</p>
                </div>
              )}
              
              {product.horsepower && (
                <div>
                  <span className="text-sm text-muted-foreground">Horsepower</span>
                  <p className="font-medium">{product.horsepower} HP</p>
                </div>
              )}
              
              {product.topSpeed && (
                <div>
                  <span className="text-sm text-muted-foreground">Top Speed</span>
                  <p className="font-medium">{product.topSpeed} km/h</p>
                </div>
              )}
              
              {product.acceleration && (
                <div>
                  <span className="text-sm text-muted-foreground">0-100 km/h</span>
                  <p className="font-medium">{product.acceleration}</p>
                </div>
              )}
              
              {product.weight && (
                <div>
                  <span className="text-sm text-muted-foreground">Weight</span>
                  <p className="font-medium">{product.weight} kg</p>
                </div>
              )}
              
              {product.fuelType && (
                <div>
                  <span className="text-sm text-muted-foreground">Fuel Type</span>
                  <p className="font-medium">{product.fuelType}</p>
                </div>
              )}
            </div>
            
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <span className="text-sm text-muted-foreground block mb-2">Available Colors</span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span 
                      key={color} 
                      className="px-3 py-1 bg-slate-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Add to Cart Section */}
            <div className="border-t dark:border-gray-800 pt-6 mt-6">
              {product.available ? (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-4">Quantity</span>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="h-9 w-9 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 font-medium">{quantity}</span>
                      <button
                        type="button"
                        className="h-9 w-9 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  size="lg"
                  disabled
                >
                  Currently Unavailable
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="product-grid">
              {relatedProducts.map((related, index) => (
                <div key={related.id} className="animate-on-scroll">
                  <ProductCard product={related} index={index} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductPage;
