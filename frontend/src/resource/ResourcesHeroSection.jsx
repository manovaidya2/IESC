import React from "react";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import resourcesHero from "../images/reso.png";

export default function ResourcesHeroSection() {
  return (
    <section
  className="relative overflow-hidden bg-center bg-no-repeat text-white"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(1,8,13,.98) 0%,
        rgba(1,8,13,.88) 32%,
        rgba(1,8,13,.42) 58%,
        rgba(1,8,13,.15) 100%
      ),
      url(${resourcesHero})
    `,
    backgroundSize: "110%", // 100% = normal, 110-120% adjust karo
  }}
>
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10  mx-auto px-5 lg:px-10 py-[36px]">
        <div className="max-w-[620px]">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-white/85 mb-7">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Resources</span>
          </div>

          <h1 className="text-[36px] sm:text-[44px] md:text-[44px] font-bold leading-[1.12] font-black mb-5">
            Knowledge. Insights. <br />
            Standards.{" "}
            <span className="text-[#ed1c1c]">All in One Place.</span>
          </h1>

          <p className="max-w-[580px] text-[15px] md:text-[16px] leading-[1.75] font-semibold text-[#e2e8eb] mb-7">
            Explore our comprehensive library of resources designed to support
            engineers, organizations, and industry professionals in achieving
            excellence and staying ahead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-[46px] px-6 bg-[#ed1c1c] border-2 border-[#ed1c1c] font-bold text-white text-[14px] font-black rounded-[3px] flex items-center justify-center gap-5">
              Browse Resource Library
              <ArrowRight size={17} />
            </button>

            <button className="h-[46px] px-6 bg-black/20 border-2 border-white/40 text-white text-[14px] font-bold font-black rounded-[3px] flex items-center justify-center gap-5">
              Subscribe to Updates
              <Mail size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}