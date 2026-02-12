import Image from "next/image";

const portfolioItems = [
  { src: "/images/pple.jpeg", title: "Branded T-Shirt", category: "Apparel" },
  { src: "/images/mug.jpg", title: "Custom Mug", category: "Souvenirs" },
  { src: "/images/tshirt.jpg", title: "T-Shirt", category: "Apparel" },
  { src: "/images/jotter.jpg", title: "Corporate Jotter", category: "Stationery" },
  { src: "/images/wallclock.jpg", title: "Wall Clock", category: "Gifts" },
  { src: "/images/bag.jpeg", title: "Branded Paper Bag", category: "Packaging" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Recent Work</h2>
          <p className="mt-4 text-xl text-gray-600">
            Take a look at some of the projects we've delivered for our happy clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-white font-bold text-xl translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      {item.title}
                    </p>
                    <p className="text-gray-200 text-sm mt-2 translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
