
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, BadgeIndianRupee, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { formatPrice } from "@/data/products";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate taxes and shipping
  const taxes = totalPrice * 0.18;
  const shipping = totalPrice > 5000000 ? 0 : 100000;
  const grandTotal = totalPrice + taxes + shipping;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zipCode) errors.zipCode = "ZIP code is required";
    if (!formData.cardNumber) errors.cardNumber = "Card number is required";
    if (!formData.cardName) errors.cardName = "Name on card is required";
    if (!formData.expiryDate) errors.expiryDate = "Expiry date is required";
    if (!formData.cvv) errors.cvv = "CVV is required";
    
    return errors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Order Successful!",
        description: "Your order has been placed successfully.",
      });
      
      // Clear cart and redirect to success page
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <div className="luxury-container py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={formErrors.firstName ? "border-red-500" : ""}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={formErrors.lastName ? "border-red-500" : ""}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={formErrors.phone ? "border-red-500" : ""}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={formErrors.address ? "border-red-500" : ""}
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-sm">{formErrors.address}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={formErrors.city ? "border-red-500" : ""}
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-sm">{formErrors.city}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={formErrors.state ? "border-red-500" : ""}
                  />
                  {formErrors.state && (
                    <p className="text-red-500 text-sm">{formErrors.state}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={formErrors.zipCode ? "border-red-500" : ""}
                  />
                  {formErrors.zipCode && (
                    <p className="text-red-500 text-sm">{formErrors.zipCode}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              
              <Alert className="mb-4">
                <AlertDescription>
                  This is a demo checkout. No real payment will be processed.
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className={formErrors.cardNumber ? "border-red-500" : ""}
                    maxLength={19}
                  />
                  {formErrors.cardNumber && (
                    <p className="text-red-500 text-sm">{formErrors.cardNumber}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={formErrors.cardName ? "border-red-500" : ""}
                  />
                  {formErrors.cardName && (
                    <p className="text-red-500 text-sm">{formErrors.cardName}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className={formErrors.expiryDate ? "border-red-500" : ""}
                      maxLength={5}
                    />
                    {formErrors.expiryDate && (
                      <p className="text-red-500 text-sm">{formErrors.expiryDate}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="password"
                      maxLength={3}
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={formErrors.cvv ? "border-red-500" : ""}
                    />
                    {formErrors.cvv && (
                      <p className="text-red-500 text-sm">{formErrors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Link to="/cart">
                <Button type="button" variant="outline">
                  <ArrowLeft size={16} className="mr-2" />
                  Return to Cart
                </Button>
              </Link>
              
              <Button 
                type="submit" 
                disabled={isProcessing}
                className="min-w-[150px]"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border dark:border-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-4">
              {cartItems.map((item) => (
                <div 
                  key={item.product.id} 
                  className="flex items-start pb-4 border-b dark:border-gray-800 last:border-0"
                >
                  <div className="h-16 w-16 rounded-md overflow-hidden bg-slate-100 dark:bg-gray-800 flex-shrink-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium">{item.product.name}</h4>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium mt-1">
                      <BadgeIndianRupee size={12} className="inline mr-0.5" />
                      {formatPrice(item.product.price * item.quantity).replace('₹', '')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 border-t dark:border-gray-800 pt-4">
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
            
            <div className="flex justify-between py-4 text-lg font-bold border-t dark:border-gray-800 mt-3">
              <span>Total</span>
              <span className="text-primary">
                <BadgeIndianRupee size={16} className="inline mr-0.5" />
                {formatPrice(grandTotal).replace('₹', '')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
