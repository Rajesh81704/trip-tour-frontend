import { Shield, Headphones, Lock, LayoutGrid, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We ensure you get the best price on all our packages.",
    color: "bg-blue-50 text-[#2563EB]",
    iconBg: "bg-[#2563EB]",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our travel experts are always here to help you.",
    color: "bg-orange-50 text-[#F59E0B]",
    iconBg: "bg-[#F59E0B]",
  },
  {
    icon: Lock,
    title: "Safe & Secure Booking",
    description: "Your booking is protected with secure payment.",
    color: "bg-green-50 text-[#22C55E]",
    iconBg: "bg-[#22C55E]",
  },
  {
    icon: LayoutGrid,
    title: "Flexible Packages",
    description: "Customize your trip as per your needs.",
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-600",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Travelers",
    description: "Thousands of happy travelers trust us every day.",
    color: "bg-rose-50 text-rose-500",
    iconBg: "bg-rose-500",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Why Book With Us</p>
          <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
            Travel With Confidence
          </h2>
          <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3 mx-auto" />
          <p className="text-[#6B7280] text-[16px] mt-5 max-w-xl mx-auto leading-relaxed">
            We take care of every detail so you can focus on what matters most — enjoying your journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {features.map(({ icon: Icon, title, description, iconBg }) => (
            <div
              key={title}
              className="bg-white rounded-[20px] p-6 flex flex-col items-center text-center group hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] cursor-default"
            >
              <div
                className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-[#111827] text-[14px] mb-2 leading-snug">{title}</h3>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "50,000+", label: "Happy Travelers" },
            { value: "500+", label: "Tour Packages" },
            { value: "100+", label: "Destinations" },
            { value: "15+", label: "Years Experience" },
            { value: "4.8/5", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[28px] font-extrabold text-[#2563EB] leading-none">{stat.value}</div>
              <div className="text-[13px] text-[#6B7280] mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
