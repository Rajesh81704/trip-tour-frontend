import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const cities = [
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gateway of India",
  },
  {
    name: "Delhi-NCR",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Capital Heritage",
  },
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Silicon Valley",
  },
  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pearl City",
  },
  {
    name: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Planned Paradise",
  },
  {
    name: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1609948543931-f58c8e4a6c0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Heritage Hub",
  },
  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1567836683126-b66740706b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cultural Capital",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Detroit of India",
  },
  {
    name: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "City of Joy",
  },
  {
    name: "Kochi",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Queen of Arabian Sea",
  },
];

export const IndianCities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover India&apos;s vibrant cities with rich heritage and modern
            attractions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cities.map((city, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  width={800}
                  height={600}
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <CardContent className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="font-bold text-sm">{city.name}</h3>
                  <p className="text-xs opacity-90">{city.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
