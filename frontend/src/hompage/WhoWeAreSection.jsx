import React from "react";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import industryBg from "../images/light.png";

export default function WhoWeAreSection() {
  const points = [
    "Global Standards Development",
    "Competency & Practical Assessments",
    "Professional Memberships",
    "Industry Collaboration",
    "Workforce Verification & Registry",
  ];

  return (
    <section
      className="relative min-h-[430px] md:min-h-[470px] bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(1,8,13,.96) 0%,
          rgba(1,8,13,.78) 36%,
          rgba(1,8,13,.34) 62%,
          rgba(1,8,13,.88) 100%
        ), url(${industryBg})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 " />

      <div className="relative z-10  mx-auto px-5 md:px-6 lg:px-10 py-[40px] md:py-[40px] grid lg:grid-cols-[1fr_240px] gap-8 items-start">
        
        {/* Left Content */}
        <div className="max-w-[450px]">
          <p className="text-[#ed1c1c] text-[12px] md:text-[13px] font-black uppercase tracking-[1px] mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-[36px] leading-[1.12] font-semibold tracking-[1px] mb-4">
            Engineering Standards. <br />
            Global Impact.
          </h2>

          <p className="text-[13px] md:text-[15px] leading-[1.6] text-[#d8dde0] font-medium mb-5">
            IESC is an international engineering standards and competency
            authority dedicated to raising the bar for technical excellence,
            industrial safety, and professional recognition worldwide.
          </p>

          <div className="space-y-2 mb-6">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  size={15}
                  className="text-[#ed1c1c] shrink-0"
                />

                <span className="text-[13px] md:text-[14px] font-medium text-[#e1e5e8]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button className="h-[42px] px-5 border border-white/30 bg-black/25 text-white text-[11px] font-black uppercase tracking-[0.5px] flex items-center gap-4 hover:bg-black/40 transition-all">
            ABOUT IESC
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-[240px] bg-[#171f24]/92 backdrop-blur-sm  self-start">

          {/* Mission */}
          <div className="p-5">
            <h3 className="text-[17px] font-bold mb-3">
              Our Mission
            </h3>

            <div className="w-[45px] h-[3px] bg-[#ed1c1c] mb-4" />

            <p className="text-[13px] leading-[1.7] text-[#d8dde0]">
              To develop global engineering standards and competency
              frameworks that empower professionals, industries,
              and institutions to achieve excellence,
              innovation and sustainable growth.
            </p>
          </div>

          {/* Bottom Red Box */}
          <div className="bg-[#ed1c1c] p-5 min-h-[95px] flex items-center gap-4">
            <Target
              size={34}
              strokeWidth={1.8}
            />

            <h4 className="text-[18px] leading-[1.2] font-bold">
              Engineering <br />
              Excellence <br />
              Worldwide
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
}