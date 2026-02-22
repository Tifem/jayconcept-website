"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anthony Siji",
    role: "Writer",
    content:
      "First of, I wasn't even expecting the mug, you didn't just add a gift but a print on the gift, am even more happier with the gift than the jotter  the jotter were very okay, good quality, nice concept maybe because it's Jay concept. Definitely going to come back for more!",
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
    content:
      "I ordered custom towel and frame. They were beautiful and everyone loved them! Thank you God bless you and JAYCONCEPTS.",
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
    content:
      "Thank you very much for delivering Jay. It came out exactly like I wanted it to. And even though I stressed you with not sending it early, you still did it well. Thank you mama.",
    image: "",
  },
  {
    name: "Olaleye Ayomide",
    role: "Frontend Developer",
    content: "I really like the jotter you did... Thank you very much",
    image: "/images/ay.jpeg",
  },
];

const CARD_WIDTH = 424; // card width (400px) + gap (2 × 12px margin)
const SCROLL_SPEED = 0.5;       // px per frame — lower = slower
const PAUSE_AFTER_INTERACTION = 2000;

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Resume auto-scroll after inactivity
  const resumeAfterDelay = useCallback(() => {
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    setIsPaused(true);
    pauseTimer.current = setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACTION);
  }, []);

  // requestAnimationFrame slow-motion auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId: number;

    const step = () => {
      if (!isPaused && el) {
        // Seamless loop: when we reach the halfway point (duplicate starts), jump back silently
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += SCROLL_SPEED;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    resumeAfterDelay();
    el.scrollBy({ left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH, behavior: "smooth" });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 shadow-md rounded-full p-2.5 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 shadow-md rounded-full p-2.5 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>

          {/* Gradient fade masks */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none rounded-l-2xl" />
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-sky-50 to-transparent z-10 pointer-events-none rounded-r-2xl" />

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-hidden scroll-smooth gap-0 py-4 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Duplicate list for seamless looping */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                onClick={() => toggleExpand(index)}
                className={`w-[300px] md:w-[400px] flex-shrink-0 mx-3 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer group ${
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

                <p
                  className={`text-gray-600 italic leading-relaxed transition-all duration-300 ${
                    expandedIndex === index ? "" : "line-clamp-4"
                  }`}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {testimonial.content.length > 150 && (
                  <div
                    className={`mt-2 text-blue-500 text-sm font-semibold ${
                      expandedIndex === index ? "hidden" : "block"
                    }`}
                  >
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
