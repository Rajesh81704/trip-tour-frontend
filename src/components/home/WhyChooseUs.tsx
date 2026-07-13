import { Shield, Headphones, Lock, LayoutGrid, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We ensure you get the best price on all our packages. No hidden fees.",
    iconBg: "bg-blue-100",
    iconColor: "text-[#2563EB]",
    accent: "border-blue-100",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our travel experts are always here to help you, day or night.",
    iconBg: "bg-amber-100",
    iconColor: "text-[#F59E0B]",
    accent: "border-amber-100",
  },
  {
    icon: Lock,
    title: "Safe & Secure Booking",
    description: "Your booking is protected with industry-standard encryption.",
    iconBg: "bg-green-100",
    iconColor: "text-[#22C55E]",
    accent: "border-green-100",
  },
  {
    icon: LayoutGrid,
    title: "Flexible Packages",
    description: "Fully customizable trips tailored to your schedule and budget.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    accent: "border-purple-100",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Thousands",
    description: "50,000+ happy travelers have booked their dream trips with us.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    accent: "border-rose-100",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-2">
            Why Book With Us
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#111827] leading-tight">
            Travel With Confidence
          </h2>
          <div className="w-12 h-1 bg-[#F59E0B] rounded-full mt-2.5 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map(({ icon: Icon, title, description, iconBg, iconColor }) => (
            <div
              key={title}
              className="bg-[#F8FAFC] rounded-[18px] p-5 flex flex-col items-center text-center group hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB]"
            >
              <div
                className={`${iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`h-5.5 w-5.5 ${iconColor}`} style={{ width: 22, height: 22 }} />
              </div>
              <h3 className="font-bold text-[#111827] text-[13px] mb-1.5 leading-snug">{title}</h3>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
