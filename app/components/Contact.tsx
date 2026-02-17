"use client";

import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from "lucide-react";
import { TikTokIcon } from "./TikTokIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to start your project? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium">Phone</p>
                  <p className="mt-1 text-blue-100">+234 (0) 8162682143</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium">Email</p>
                  <p className="mt-1 text-blue-100">boluwatifejanet7@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium">Address</p>
                  <p className="mt-1 text-blue-100">
                    4 Surulere, Alagbado Street,<br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-blue-100 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/jayconcept14/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                    <Instagram size={20} />
                </a>
                 <a 
                  href="https://www.linkedin.com/in/boluwatife-janet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                    <Linkedin size={20} />
                </a>
                 <a 
                  href="https://www.tiktok.com/@jay_concept14?_r=1&_t=ZS-93mcYRLHkMK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                    <TikTokIcon size={20} />
                </a>
                 <a 
                  href="https://x.com/jayconcept_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                    <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const name = (document.getElementById('name') as HTMLInputElement).value;
              const subject = (document.getElementById('subject') as HTMLInputElement).value;
              const message = (document.getElementById('message') as HTMLTextAreaElement).value;
              
              const text = `Hello Jay Concept, I would like to make an enquiry.\n\n${subject}\n\n${message}\n\nFrom: ${name}`;
              const whatsappUrl = `https://api.whatsapp.com/send?phone=2348162682143&text=${encodeURIComponent(text)}`;
              
              window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700"> Subject </label>
                <input
                  required
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700"> Message </label>
                <textarea
                  required
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
              >
                Send Message via WhatsApp
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
