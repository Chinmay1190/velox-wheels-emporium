
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { BadgeIndianRupee } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function CartItem({ id, name, price, imageUrl, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };
  
  return (
    <div className="flex py-6 border-b dark:border-gray-800">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-slate-100 dark:bg-gray-800">
        <Link to={`/product/${id}`}>
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between">
            <Link 
              to={`/product/${id}`}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              {name}
            </Link>
            <p className="flex items-center font-medium">
              <BadgeIndianRupee size={14} className="inline mr-1" />
              {formatPrice(price * quantity).replace('₹', '')}
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            <BadgeIndianRupee size={12} className="inline mr-1" />
            {formatPrice(price).replace('₹', '')} each
          </p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => removeFromCart(id)}
            className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
