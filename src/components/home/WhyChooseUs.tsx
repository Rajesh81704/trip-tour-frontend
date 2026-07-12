import { Shield, Headphones, Lock, LayoutGrid, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We ensure you get the best price on all our packages.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our travel experts are always here to help you.",
  },
  {
    icon: Lock,
    title: "Safe & Secure Booking",
    description: "Your booking is protected with secure payment.",
  },
  {
    icon: LayoutGrid,
    title: "Flexible Packages",
    description: "Customize your trip as per your needs.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Travelers",
    description: "Thousands of happy travelers trust us every day.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Why Book With Us
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Travel With Confidence</h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full mt-3 mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
