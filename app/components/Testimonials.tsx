"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Anthony Siji",
    role: "Writer",
    content: "First of, I wasn’t even expecting the mug, you didn’t just add a gift but a print on the gift, am even more happier with the gift than the jotter  the jotter were very okay, good quality, nice concept maybe because it’s Jay concept. Definitely going to come back for more!",
    image: "/images/siji.jpeg",
  },
  {
    name: "Olamide Sulayhko",
    role: "Self Employed",
    content: "You did a great job on the jotter. I loveeeee it . And thanks for the mug also .",
    image: "/images/olamide.jpeg",
  },
  {
    name: "Olamide Doris",
    role: "Nursing",
    content: "I ordered custom towel and frame. They were beautiful and everyone loved them! Thank you God bless you and JAYCONCEPTS.",
    image: "/images/olaa.jpeg",
  },
  {
    name: "David Adeyemo",
    role: "Self Employed",
    content: "I swear d jotter is so fine. Na everybody like am... Someone even ask of your contact",
    image: "/images/david.jpeg",
  },
  {
    name: "May Frost",
    role: "Graphic Designer",
    content: "Thank you very much for delivering Jay.It came out exactly like I wanted it to.And even though I stressed you with not sending it early, you still did it well. Thank you mama.",
    image: "",
  },
  {
    name: "Olaleye Ayomide",
    role: "Frontend Developer",
    content: "I really like the jotter you did... Thank you very much",
    image: "/images/ay.jpeg",
  },
];

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          {/* Gradient Masks for smooth fade effect at edges */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll pause-on-hover">
            {/* Double the testimonials to create seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                onClick={() => toggleExpand(index)}
                className={`w-[300px] md:w-[400px] flex-shrink-0 mx-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer group ${
                  expandedIndex === index ? "z-20 scale-105 shadow-2xl" : "hover:scale-[1.02]"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                     {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                     ) : (
                        <div className="bg-blue-600 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                     )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className={`text-gray-600 italic leading-relaxed transition-all duration-300 ${
                  expandedIndex === index ? "" : "line-clamp-4"
                }`}>
                  "{testimonial.content}"
                </p>
                
                {testimonial.content.length > 150 && (
                   <div className={`mt-2 text-blue-500 text-sm font-semibold ${expandedIndex === index ? "hidden" : "block"}`}>
                     Read more
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
