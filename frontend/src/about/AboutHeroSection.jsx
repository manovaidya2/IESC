import React from "react";
import { ChevronRight } from "lucide-react";
import aboutBg from "../images/abouhero.png";

export default function AboutHeroSection() {
  return (
    <section
      className="relative h-[215px] md:h-[260px] overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(1,8,13,.92) 0%,
            rgba(1,8,13,.72) 36%,
            rgba(1,8,13,.38) 65%,
            rgba(1,8,13,.82) 100%
          ),
          url(${aboutBg})
        `,
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* subtle industrial overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 md:px-10 flex items-center">
        <div className="max-w-[540px]">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-semibold text-[#d7dde0] mb-5">
            <span className="hover:text-white transition cursor-pointer">
              Home
            </span>

            <ChevronRight size={14} />

            <span className="text-white">
              About IESC
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[42px] md:text-[50px] leading-none font-bold font-black tracking-[0.5px] uppercase text-white">
            ABOUT IESC
          </h1>

          {/* Red line */}
          <div className="w-[58px] h-[4px] bg-[#ed1c1c] mt-5 mb-5" />

          {/* Description */}
          <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#d7dde0] font-medium">
            IESC is a global authority dedicated to advancing engineering
            competency, setting international standards, and empowering
            professionals and industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}