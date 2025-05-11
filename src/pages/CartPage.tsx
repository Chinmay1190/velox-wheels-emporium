
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, BadgeIndianRupee } from "lucide-react";
import CartItem from "@/components/CartItem";
import { formatPrice } from "@/data/products";

const CartPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  
  // Calculate taxes (18% GST)
  const taxes = totalPrice * 0.18;
  
  // Free shipping over ₹50,000
  const shipping = totalPrice > 5000000 ? 0 : 100000;
  
  // Calculate grand total
  const grandTotal = totalPrice + taxes + shipping;
  
  if (cartItems.length === 0) {
    return (
      <div className="luxury-container py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center">
              <ShoppingCart size={36} className="text-muted-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-8 text-muted-foreground">
            Looks like you haven't added any products to your cart yet. 
            Explore our collection to find the perfect vehicle for you.
          </p>
          
          <Link to="/shop">
            <Button size="lg">
              Start Shopping
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="luxury-container py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="space-y-0">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                imageUrl={item.product.imageUrl}
                quantity={item.quantity}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Link to="/shop">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </Button>
            </Link>
            
            <Button variant="outline" onClick={clearCart} className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="border dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 border-b dark:border-gray-800 pb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">
                  <BadgeIndianRupee size={14} className="inline mr-0.5" />
                  {formatPrice(totalPrice).replace('₹', '')}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes (18% GST)</span>
                <span className="font-medium">
                  <BadgeIndianRupee size={14} className="inline mr-0.5" />
                  {formatPrice(taxes).replace('₹', '')}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    "Free"
                  ) : (
                    <>
                      <BadgeIndianRupee size={14} className="inline mr-0.5" />
                      {formatPrice(shipping).replace('₹', '')}
                    </>
                  )}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between py-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">
                <BadgeIndianRupee size={16} className="inline mr-0.5" />
                {formatPrice(grandTotal).replace('₹', '')}
              </span>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full mt-4" size="lg">
                Proceed to Checkout
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Free shipping on orders over ₹50,00,000.</p>
              <p className="mt-2">Need help? <Link to="/contact" className="text-primary hover:underline">Contact support</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
