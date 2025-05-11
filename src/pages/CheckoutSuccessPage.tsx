
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Home, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CheckoutSuccessPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  // Redirect to home if cart is not empty (meaning they didn't go through checkout)
  useEffect(() => {
    if (cartItems.length > 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);
  
  return (
    <div className="luxury-container py-16 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Check size={40} className="text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
        
        <p className="mb-6 text-muted-foreground">
          Thank you for your purchase! Your order has been received and is being processed.
        </p>
        
        <div className="bg-slate-50 dark:bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-2">What's Next?</h2>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>We'll send you an email with your order details and tracking information.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Our team will contact you to arrange delivery or pickup of your vehicle.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Your vehicle will undergo final inspection and preparation before delivery.</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Home size={16} className="mr-2" />
              Return Home
            </Button>
          </Link>
          
          <Link to="/shop">
            <Button size="lg" className="w-full sm:w-auto">
              <ShoppingCart size={16} className="mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
