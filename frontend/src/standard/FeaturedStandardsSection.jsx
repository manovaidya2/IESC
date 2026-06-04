import React from "react";
import {
  ArrowRight,
  BookOpen,
  Download,
  Mail,
} from "lucide-react";

export default function FeaturedStandardsSection() {
  const standards = [
    {
      code: "IESC-ME-1001:2024",
      title: "Mechanical Design\nPrinciples Standard",
      text: "Requirements for mechanical design calculations, safety factors, and material selection.",
      img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600&auto=format&fit=crop",
    },
    {
      code: "IESC-EE-6001:2024",
      title: "Electrical Installation\nSafety Standard",
      text: "Safety requirements for electrical installations and power distribution systems.",
      img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
    },
    {
      code: "IESC-CIV-3001:2024",
      title: "Structural Steel Design\nStandard",
      text: "Design requirements for structural steel buildings and infrastructure.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
    },
    {
      code: "IESC-RO-6001:2024",
      title: "Industrial Robotics\nSafety Standard",
      text: "Safety requirements for industrial robot systems and automated workcells.",
      img: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=600&auto=format&fit=crop",
    },
    {
      code: "IESC-QMS-8001:2024",
      title: "Quality Management\nSystems Standard",
      text: "Requirements for quality management systems in manufacturing industries.",
      img: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const ctaItems = [
    {
      icon: BookOpen,
      title: "Stay Updated",
      text: "Get the latest standards and updates",
    },
    {
      icon: Download,
      title: "Download Standards",
      text: "Access and download standards securely",
    },
    {
      icon: Mail,
      title: "Join Standards Committee",
      text: "Contribute to the future of engineering standards",
    },
  ];

  return (
    <section className="bg-white px-5 lg:px-10 py-[38px] text-[#111]">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="flex items-end justify-between gap-5 mb-5">
          <div>
            <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-2">
              Featured Standards
            </p>

            <h2 className="text-[30px] md:text-[32px] font-bold leading-[1.15] font-black">
              Latest Published Standards
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-3 text-[#ed1c1c] text-[12px] font-bold font-black">
            View All Standards
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
          {standards.map((item) => (
            <div
              key={item.code}
              className="rounded-[5px] border border-[#dedede] bg-white overflow-hidden shadow-[0_3px_14px_rgba(0,0,0,.04)]"
            >
              <div className="h-[115px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title.replace("\n", " ")}
                  className="h-full w-full object-cover grayscale"
                />
              </div>

              <div className="px-5 py-5">
                <span className="inline-block bg-[#efefef] text-[#333] font-bold text-[10px] font-black px-2 py-1 mb-3">
                  {item.code}
                </span>

                <h3 className="whitespace-pre-line text-[17px] font-bold leading-[1.25] font-black mb-2 min-h-[42px]">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-[1.65] font-semibold text-[#333] min-h-[58px] mb-2">
                  {item.text}
                </p>

                <button className="text-[#ed1c1c] text-[12px] font-black flex items-center gap-3">
                  View Standard
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="relative rounded-[5px] overflow-visible bg-[#020b10] text-white border border-white/10">
          <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
            <div className="px-5 py-6">
              <h3 className="text-[20px] leading-[1.2] font-bold font-black mb-3">
                Advance Engineering. Build the Future.
              </h3>

              <p className="text-[14px] leading-[1.65] font-semibold text-white/85 max-w-[560px]">
                Access world-class engineering standards and frameworks that
                drive innovation, safety, and professional excellence.
              </p>
            </div>

            {ctaItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative px-7 py-6 flex items-center gap-5"
                >
                  <Icon
                    size={44}
                    strokeWidth={1.4}
                    className="text-white shrink-0"
                  />

                  <div>
                    <h4 className="text-[13px] font-bold font-black mb-2">
                      {item.title}
                    </h4>

                    <p className="text-[11px] leading-[1.5] font-semibold text-white/75 max-w-[170px]">
                      {item.text}
                    </p>
                  </div>

                  {index !== ctaItems.length - 1 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 h-[64px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}