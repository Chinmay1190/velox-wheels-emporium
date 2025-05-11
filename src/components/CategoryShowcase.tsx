
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { setupScrollAnimation } from "@/lib/animate-utils";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const CategoryCard = ({ title, description, image, link, index }: CategoryCardProps) => {
  return (
    <div 
      className={`animate-on-scroll relative overflow-hidden rounded-lg bg-slate-100 dark:bg-gray-900 shadow-lg ${
        index % 2 === 0 ? "lg:col-span-2" : "lg:col-span-1"
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover aspect-[16/9]" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 max-w-lg">{description}</p>
        <Link to={link}>
          <Button className="group">
            Explore Collection
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export function CategoryShowcase() {
  const categories = [
    {
      title: "Superbikes",
      description: "Experience the rush of adrenaline with our collection of high-performance superbikes from the world's top manufacturers.",
      image: "https://images.unsplash.com/photo-1580310728519-1af582f834d8?q=80&w=1170&auto=format&fit=crop",
      link: "/category/superbike"
    },
    {
      title: "Supercars",
      description: "Discover engineering excellence with our selection of exotic supercars that redefine automotive performance.",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1074&auto=format&fit=crop",
      link: "/category/supercar"
    },
    {
      title: "Luxury Cars",
      description: "Indulge in unparalleled luxury and sophistication with our premium collection of luxury automobiles.",
      image: "https://images.unsplash.com/photo-1631295387526-d9156650d2a3?q=80&w=1257&auto=format&fit=crop",
      link: "/category/luxury-car"
    }
  ];
  
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);
  
  return (
    <section className="luxury-container py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.title}
            title={category.title}
            description={category.description}
            image={category.image}
            link={category.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;
