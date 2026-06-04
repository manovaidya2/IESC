import React from "react";
import {
  Cog,
  Zap,
  Landmark,
  Factory,
  Bot,
  BadgeCheck,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function StandardsCategoriesSection() {
  const categories = [
    {
      icon: Cog,
      title: "Mechanical\nEngineering",
      text: "Design, materials, manufacturing, and maintenance standards.",
    },
    {
      icon: Zap,
      title: "Electrical\nEngineering",
      text: "Electrical systems, power, installations, and safety standards.",
    },
    {
      icon: Landmark,
      title: "Civil & Structural\nEngineering",
      text: "Structural design, construction, and infrastructure standards.",
    },
    {
      icon: Factory,
      title: "Industrial\nEngineering",
      text: "Process optimization, operations, and systems standards.",
    },
    {
      icon: Bot,
      title: "Manufacturing\nEngineering",
      text: "CNC, machining, fabrication, and production standards.",
    },
    {
      icon: Cpu,
      title: "Robotics &\nAutomation",
      text: "Automation systems, robotics integration, and control standards.",
    },
    {
      icon: BadgeCheck,
      title: "Quality & Production\nSystems",
      text: "Quality management, inspection, and production standards.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Environmental\nEngineering",
      text: "Occupational safety, risk management, and environmental standards.",
    },
  ];

  return (
    <section className="bg-[#f8f8f7] text-[#111] px-4 sm:px-5 lg:px-10 py-[36px] mt-[75px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 lg:gap-10">
        {/* Left Content */}
        <div className="pt-1">
          <p className="text-[#ed1c1c] text-[11px] sm:text-[12px] font-black uppercase mb-3 sm:mb-4">
            Standards Categories
          </p>

          <h2 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold leading-[1.18] font-black mb-5 sm:mb-6 max-w-[420px] lg:max-w-[300px]">
            Comprehensive Standards Across <br className="hidden sm:block" />
            Engineering Disciplines
          </h2>

          <p className="text-[13px] leading-[1.7] font-semibold text-[#333] max-w-[420px] lg:max-w-[245px] mb-5">
            Our standards and frameworks cover critical engineering domains and
            professional competency areas.
          </p>

          <button className="h-[42px] px-5 border border-[#222] bg-white text-[#111] text-[12px] font-black rounded-[3px] flex items-center gap-4">
            View All Categories
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-[174px] rounded-[6px] border border-[#dddddd] bg-white px-5 py-6 shadow-[0_3px_14px_rgba(0,0,0,.04)] overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-5">
                  <Icon
                    size={38}
                    strokeWidth={1.5}
                    className="text-[#111] shrink-0"
                  />

                  <h3 className="whitespace-pre-line text-[14px] font-bold sm:text-[15px] leading-[1.35] font-black break-words max-w-[190px]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[12px] leading-[1.7] font-semibold text-[#333] mb-4 max-w-[260px]">
                  {item.text}
                </p>

                <button className="text-[#ed1c1c] text-[12px] font-bold font-black flex items-center gap-4">
                  View Standards
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}