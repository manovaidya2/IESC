import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import assessmentHero from "../images/hero.png";

export default function AssessmentHeroSection() {
  const scrollToAssessmentProcess = () => {
    document
      .getElementById("assessment-process")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-[410px] overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(1,8,13,.98) 0%,
            rgba(1,8,13,.90) 34%,
            rgba(1,8,13,.48) 60%,
            rgba(1,8,13,.18) 100%
          ),
          url(${assessmentHero})
        `,
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-10 pt-[45px] pb-[42px]">
        <div className="max-w-[650px]">
          <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-white/85 mb-8">
            <span>Home</span>
            <ChevronRight size={15} />
            <span>Industrial Competency Assessments</span>
          </div>

          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] leading-[1.05] font-bold font-black tracking-[0.2px] mb-5">
            Industrial <br />
            Competency Assessments
          </h1>

          <div className="w-[48px] h-[3px] bg-[#ed1c1c] mb-5" />

          <p className="max-w-[610px] text-[15px] sm:text-[18px] font-semibold leading-[1.65] text-[#e2e8eb] mb-8">
            Rigorous assessment systems that validate your technical skills,
            practical knowledge, and professional competence to global
            engineering standards.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button className="w-full sm:w-auto h-[46px] px-7 bg-[#ed1c1c] border-2 border-[#ed1c1c] text-white text-[14px] font-semibold font-black rounded-[3px] flex items-center justify-center gap-2">
              Explore Assessments
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={scrollToAssessmentProcess}
              className="w-full sm:w-auto h-[46px] px-7 bg-black/20 border-2 border-white/40 text-white text-[14px] font-semibold font-black rounded-[3px] flex items-center justify-center gap-2"
            >
              Assessment Process
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
