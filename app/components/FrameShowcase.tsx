"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Product {
  src: string;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  { src: "/images/borderless frame.jpeg", title: "Borderless Frame", description: "Sleek and modern borderless frame for a clean look.", price: "₦12,000" },
  { src: "/images/combo package.jpeg", title: "Gift Combo Package", description: "Perfect gift set including diary, bottle, and pen.", price: "₦25,000" },
  { src: "/images/customized bottle.jpeg", title: "Custom Water Bottle", description: "Durable aluminum bottle with custom print.", price: "₦12,000" },
  { src: "/images/apron.jpeg", title: "Branded Apron", description: "High-quality apron for kitchen or workspace branding.", price: "₦10,000" },
  { src: "/images/facecap.jpg", title: "Face Cap", description: "Elegant face cap for professional use.", price: "₦3,500" },
  { src: "/images/jotter2.jpeg", title: "Event Souvenir Jotter", description: "Customized jotters perfect for events and parties.", price: "₦80,000" },
  { src: "/images/frameclock.jpg", title: "Frame Clock", description: "Functional art combining a timepiece with a photo frame.", price: "₦25,000" },
  { src: "/images/throwpillow.jpg", title: "Custom Throw Pillow", description: "Cozy and personalized throw pillows.", price: "₦15,000" },
];

export default function FrameShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Exclusive Product Collection</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our premium range of customized items. Click on any image to view details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity duration-300">View</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{product.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                    <span className="text-xs text-gray-400">In Stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedProduct(null); }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full md:w-2/3 h-64 md:h-[80vh] bg-gray-100">
               <Image
                src={selectedProduct.src}
                alt={selectedProduct.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h3>
                <p className="text-xl text-blue-600 font-bold mb-6">{selectedProduct.price}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProduct.description}
                </p>
                
                <div className="mt-auto">
                    <a 
                        href={`https://api.whatsapp.com/send?phone=2348162682143&text=${encodeURIComponent(`Hello, I would like to order the ${selectedProduct.title} for ${selectedProduct.price}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                    >
                        Order via WhatsApp
                    </a>
                    <p className="text-center text-sm text-gray-400 mt-4">
                        Click to chat with us on WhatsApp to place your order.
                    </p>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
