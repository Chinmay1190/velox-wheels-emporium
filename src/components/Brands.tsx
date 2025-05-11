
import React from "react";

export function Brands() {
  const brands = [
    { name: "Ducati", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Ducati" },
    { name: "BMW", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=BMW" },
    { name: "Kawasaki", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Kawasaki" },
    { name: "Lamborghini", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Lamborghini" },
    { name: "Ferrari", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Ferrari" },
    { name: "Bugatti", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Bugatti" },
    { name: "Rolls-Royce", logo: "https://dummyimage.com/150x70/cccccc/ffffff.png&text=Rolls-Royce" },
  ];
  
  return (
    <section className="bg-slate-50 dark:bg-gray-900/50 py-12">
      <div className="luxury-container">
        <h2 className="text-center text-xl font-medium mb-8">Premium Brands</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
