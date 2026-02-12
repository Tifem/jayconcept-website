import { Instagram, Linkedin, Heart, Twitter } from "lucide-react";
import { TikTokIcon } from "./TikTokIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Jay Concept</h3>
            <p className="text-gray-400 max-w-sm">
                Your one-stop destination for premium branding, printing, and customized souvenirs. We bring your ideas to life.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Printing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Souvenirs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Jay Concept. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
                <a href="https://www.instagram.com/jayconcept14/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/in/boluwatife-janet/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="https://www.tiktok.com/@jay_concept14?_r=1&_t=ZS-93mcYRLHkMK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TikTokIcon size={20} /></a>
                <a href="https://x.com/jayconcept_1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Jay Concept
        </div>
      </div>
    </footer>
  );
}
