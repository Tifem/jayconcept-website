"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Adeola Adebayo",
    role: "Event Planner",
    content: "Jay Concept transformed our event souvenirs! The jotters and mugs were high quality and delivered right on time. Highly recommended!",
    image: "/images/facecap.jpg", // Using existing image as placeholder if needed, or just initials
    rating: 5,
  },
  {
    name: "Chinedu Okeke",
    role: "CEO, TechSolutions",
    content: "The corporate branding package was exceptional. From the T-shirts to the branded paper bags, everything screamed professionalism.",
    image: "/images/branded tshirt.jpg",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Bride",
    content: "I ordered custom throw pillows and frames for my wedding souvenirs. They were beautiful and everyone loved them! Thank you so much.",
    image: "/images/throwpillow.jpg",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    role: "Marketing Director",
    content: "We needed awards for our end-of-year party, and Jay Concept delivered premium glass plaques that looked absolutely stunning.",
    image: "/images/frame.jpg",
    rating: 5,
  },
  {
    name: "Fatima Yusuf",
    role: "Entrepreneur",
    content: "The customized water bottles for my fitness brand were a hit. Great print quality and durable materials. Will definitely order again.",
    image: "/images/customized bottle.jpeg",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-100 h-12 w-12 -z-10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100">
                   {/* Using a generic avatar if specific user images aren't available, or mapping from the list */}
                   <div className="bg-blue-600 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                   </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
