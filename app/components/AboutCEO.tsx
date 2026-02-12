"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutCEO() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-ceo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative h-[400px] w-full lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/jay.jpeg"
                  alt="Jay - CEO of Jay Concept"
                  fill
                  className="object-cover object-top"
                />
             </div>
             {/* Decor element */}
             <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-50 -z-10 rounded-2xl"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">Meet the CEO</h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">The Mind Behind Jay Concept</h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed transition-all duration-500 ease-in-out">
              <p>
                Hello! I'm <span className="font-bold text-gray-900">Boluwatife Janet</span>, the founder and creative force behind Jay Concept.
              </p>
              <p>
                My journey started with a simple passion—turning everyday items into lasting memories. While in polytechnic, life revolved around school, fellowship, and my hostel, with steady support from home.
              </p>
              
              <div className={`space-y-6 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p>
                    After completing my OND, things changed. Financial support stopped, and although I was working as an intern, I realized I didn’t want to depend solely on a salary. With a skill in hand and a strong desire for independence, I began sharing what I could do, starting with small jobs like picture frames and customized items.
                </p>
                <p>
                    That decision gave birth to JayConcept. From serving coursemates during my undergraduate years to building a trusted branding and printing business, the journey has been driven by consistency, creativity, and faith. Four years later, I’m grateful I took that step, and I’m trusting God as JayConcept continues to grow—locally and globally
                </p>
                <p>
                    At Jay Concept, we believe that every brand has a story, and our mission is to help you tell yours through exceptional print and design. Whether it's a corporate gift, a personalized souvenir, or branding for your business, I personally ensure that every piece we produce meets the highest standards of excellence.
                </p>
                <p>
                    Thank you for choosing us to be part of your story. Let's create something amazing together.
                </p>
              </div>
            </div>

            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors focus:outline-none"
            >
                {isExpanded ? (
                    <>Read Less <ChevronUp size={20} /></>
                ) : (
                    <>Read More <ChevronDown size={20} /></>
                )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
