
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, Home, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Superbikes", path: "/category/superbike" },
    { name: "Supercars", path: "/category/supercar" },
    { name: "Luxury Cars", path: "/category/luxury-car" },
    { name: "Classics", path: "/category/classic" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <nav className="luxury-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center space-x-2 font-bold text-xl md:text-2xl text-primary"
        >
          <span className="sr-only">VelocityLuxe</span>
          <span className="flex items-center">
            <span className="inline-block text-gradient">VelocityLuxe</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Right Section */}
        <div className="flex items-center">
          <Link 
            to="/search"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </Link>
          
          <Link 
            to="/account"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors ml-1"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          
          <ThemeToggle />
          
          <Link to="/cart" className="relative p-2 ml-1" aria-label="Shopping cart">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
              >
                {totalItems > 99 ? "99+" : totalItems}
              </Badge>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="lg:hidden ml-1" 
                aria-label="Open menu"
                size="icon"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>VelocityLuxe</SheetTitle>
                <SheetDescription>
                  Premium superbikes, supercars & luxury vehicles
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name === "Home" ? <Home size={18} className="mr-2" /> : null}
                    {link.name}
                  </Link>
                ))}
                <div className="border-t dark:border-gray-700 my-4"></div>
                <Link
                  to="/account"
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <User size={18} className="mr-2" />
                  Account
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
