import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import certificationHero from "../images/hero.png";

export default function CertificationHeroSection() {
  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-[405px] overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(1,8,13,.98) 0%,
            rgba(1,8,13,.90) 30%,
            rgba(1,8,13,.45) 58%,
            rgba(1,8,13,.18) 100%
          ),
          url(${certificationHero})
        `,
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-10 pt-[42px] pb-[42px]">
        <div className="max-w-[580px]">
          <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-white/85 mb-9">
            <span>Home</span>
            <ChevronRight size={15} />
            <span>Certification Programs</span>
          </div>

          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] leading-[1.05] font-bold font-black tracking-[0.2px] mb-5">
            Engineering <br />
            Certification Programs
          </h1>

          <div className="w-[48px] h-[3px] bg-[#ed1c1c] mb-5" />

          <p className="max-w-[560px] text-[15px] sm:text-[17px] font-semibold leading-[1.7] text-[#e2e8eb] mb-8">
            Industry-aligned certification programs that validate your technical
            knowledge, practical skills, and professional competence to advance
            your engineering career.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("program-categories")}
              className="w-full sm:w-auto h-[46px] px-7 bg-[#ed1c1c] border-2 border-[#ed1c1c] font-bold text-white text-[13px] font-black rounded-[3px] flex items-center justify-center gap-2"
            >
              Explore All Programs
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("certification-journey")}
              className="w-full sm:w-auto h-[46px] px-7 bg-black/20 border-2 font-bold border-white/40 text-white text-[13px] font-black rounded-[3px] flex items-center justify-center gap-2"
            >
              Certification Pathways
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

