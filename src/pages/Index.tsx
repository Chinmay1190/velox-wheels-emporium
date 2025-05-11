
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryShowcase from "@/components/CategoryShowcase";
import Brands from "@/components/Brands";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { setupScrollAnimation } from "@/lib/animate-utils";

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <main>
      <HeroSection />
      
      <FeaturedProducts />
      
      <section className="luxury-container py-16">
        <div className="flex flex-col md:flex-row items-center bg-slate-50 dark:bg-gray-900/50 rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Experience Luxury Beyond Imagination</h2>
            <p className="mb-6 text-muted-foreground">
              Discover our exclusive collection of high-performance machines that redefine automotive excellence. 
              Each vehicle is meticulously selected for outstanding engineering and unparalleled craftsmanship.
            </p>
            <Link to="/shop">
              <Button className="group">
                Shop All Vehicles
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1170&auto=format&fit=crop" 
              alt="Luxury sports car" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <CategoryShowcase />
      
      <section className="luxury-container py-16">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2">Premium Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At VelocityLuxe, we're committed to providing exceptional customer service at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Consultation",
              description: "Our team of automotive specialists is available to assist you in finding the perfect vehicle that meets your needs and preferences."
            },
            {
              title: "Secure Transactions",
              description: "Experience peace of mind with our secure payment gateway that ensures your financial information remains protected throughout the purchase process."
            },
            {
              title: "Premium Delivery",
              description: "From door-to-door delivery to white-glove service, we handle all logistics with the utmost care and precision."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border dark:border-gray-800 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <Brands />
      
      <section className="bg-primary text-white py-16">
        <div className="luxury-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Browse our collection of premium vehicles and find the perfect match for your lifestyle and preferences.
          </p>
          <Link to="/shop">
            <Button variant="secondary" size="lg">
              Explore All Vehicles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
