
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export function HeroSection() {
  const slides: HeroSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop",
      title: "Experience Unparalleled Performance",
      subtitle: "Discover our collection of premium superbikes that deliver thrills on every ride.",
      link: "/category/superbike"
    },
    {
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1074&auto=format&fit=crop",
      title: "Drive Your Dreams",
      subtitle: "Explore our exclusive selection of luxury supercars crafted for perfection.",
      link: "/category/supercar"
    },
    {
      image: "https://images.unsplash.com/photo-1631295387526-d9156650d2a3?q=80&w=1257&auto=format&fit=crop",
      title: "Timeless Elegance",
      subtitle: "Experience the epitome of luxury with our curated collection of premium vehicles.",
      link: "/category/luxury-car"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);
  
  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full object-center"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div 
          className={`luxury-container text-center text-white transition-all duration-700 ${
            isAnimating ? "opacity-0 transform translate-y-10" : "opacity-100 transform translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <Link to={slides[currentSlide].link}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore Collection <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
