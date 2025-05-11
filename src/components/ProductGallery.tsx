
import React, { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 
} from "@/components/ui/carousel";

interface ProductGalleryProps {
  mainImage: string;
  productName: string;
}

// Generate additional angles of the same product
const generateProductVariants = (mainImage: string, productName: string): string[] => {
  // This is a simulation - in a real app, you'd have actual product images
  // Using the main image since we don't have multiple angles
  return [
    mainImage,
    mainImage, // Using the same image as a fallback
    mainImage, // Using the same image as a fallback
  ];
};

export function ProductGallery({ mainImage, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [isZoomed, setIsZoomed] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate variants for the gallery
    const productImages = generateProductVariants(mainImage, productName);
    setImages([mainImage, ...productImages]);
  }, [mainImage, productName]);
  
  return (
    <div className="flex flex-col space-y-4">
      {/* Main image */}
      <div 
        className="relative overflow-hidden bg-slate-100 dark:bg-gray-800 rounded-lg aspect-square"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={selectedImage}
          alt={productName}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isZoomed ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      {/* Thumbnail carousel */}
      <Carousel className="max-w-md">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div 
                className={`p-1 cursor-pointer rounded-md border-2 ${
                  selectedImage === image ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${productName} thumbnail ${index + 1}`} 
                  className="aspect-square object-cover rounded-md w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}

export default ProductGallery;
