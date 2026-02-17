import { Notebook, Coffee, Image as ImageIcon, Shirt, Award, Gift } from "lucide-react";

const services = [
  { 
    title: "Jotters & Diaries", 
    icon: Notebook, 
    description: "Customized high-quality jotters for events and corporate branding. Perfect for souvenirs and office use." 
  },
  { 
    title: "Mugs & Drinkware", 
    icon: Coffee, 
    description: "Personalized mugs that make the perfect gift or souvenir. Durable prints that last." 
  },
  { 
    title: "Picture Frames", 
    icon: ImageIcon, 
    description: "Elegant frames to preserve your most cherished memories. Available in various sizes and styles." 
  },
  { 
    title: "Branded T-Shirts", 
    icon: Shirt, 
    description: "High-quality prints on t-shirts, caps, and vests. showcase your brand with style." 
  },
  { 
    title: "Awards & Plaques", 
    icon: Award, 
    description: "Prestigious awards to recognize excellence. Glass, wooden, and acrylic options available." 
  },
  { 
    title: "Souvenirs", 
    icon: Gift, 
    description: "Wide range of souvenirs including keyholders, paper bags, throw pillows, and clocks." 
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            We offer a wide range of branding and printing solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
