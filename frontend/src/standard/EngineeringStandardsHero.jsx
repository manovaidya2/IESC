import React from "react";
import {
  ChevronRight,
  ArrowRight,
  FileText,
  Wrench,
  Globe2,
  UsersRound,
  ShieldCheck,
} from "lucide-react";
import standardsHero from "../images/standard.png";

export default function EngineeringStandardsHero() {
  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    {
      icon: FileText,
      value: "250+",
      label: "Published Standards",
    },
    {
      icon: Wrench,
      value: "18",
      label: "Engineering\nDisciplines",
    },
    {
      icon: Globe2,
      value: "45+",
      label: "Countries\nAdopting",
    },
    {
      icon: UsersRound,
      value: "600+",
      label: "Technical Experts\nWorldwide",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Industry Validated\nFrameworks",
    },
  ];

  return (
    <section className="relative bg-white">
      <div
        className="relative min-h-[520px] md:min-h-[555px] overflow-visible bg-cover bg-center text-white"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(1,8,13,.98) 0%,
              rgba(1,8,13,.92) 30%,
              rgba(1,8,13,.48) 58%,
              rgba(1,8,13,.20) 100%
            ),
            url(${standardsHero})
          `,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10  mx-auto px-5 md:px-8 lg:px-10 pt-[38px] md:pt-[45px] pb-[150px]">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-white/85 mb-7 md:mb-8">
              <span>Home</span>
              <ChevronRight size={14} />
              <span>Engineering Standards & Frameworks</span>
            </div>

            <h1 className="text-[38px] sm:text-[46px] md:text-[50px] font-bold leading-[1.08] font-black tracking-[0.2px] mb-4">
              Engineering Standards <br />
              That Build Trust. <br />
              <span className="text-[#ed1c1c]">
                Enable Excellence.
              </span>
            </h1>

            <div className="w-[48px] h-[3px] bg-[#ed1c1c] mb-5" />

            <p className="max-w-[610px] text-[15px] md:text-[17px] leading-[1.7] text-[#e2e8eb] font-semibold mb-7">
              IESC develops, adopts, and promotes international engineering
              standards and frameworks that ensure safety, quality,
              interoperability, and professional competence across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("standards-categories")}
                className="h-[46px] px-6 md:px-7 bg-[#ed1c1c] font-semibold border-2 border-[#ed1c1c] text-white text-[12px] md:text-[14px] font-black rounded-[3px] flex items-center justify-center gap-5"
              >
                Browse All Standards
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("standards-framework")}
                className="h-[46px] px-6 md:px-7 bg-black/20 border-2 border-white/40 text-white text-[12px] md:text-[14px] font-semibold font-black rounded-[3px] flex items-center justify-center gap-5"
              >
                Standards Development Process
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats 50% hero + 50% white */}
        <div className="absolute left-1/2 bottom-0 z-20 w-[calc(100%-32px)] lg:w-[calc(100%-80px)] max-w-[1320px] -translate-x-1/2 translate-y-1/2 rounded-[5px] border border-[#8f1111]/50 bg-[#020b10]/95 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,.45)]">
      <div className="grid grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="relative px-6 py-6 md:py-7 text-white flex items-center justify-center"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={42}
                      strokeWidth={1.4}
                      className="text-white shrink-0"
                    />

                    <div>
                      <h3 className="text-[26px] md:text-[30px] font-bold font-black leading-none mb-2">
                        {item.value}
                      </h3>

                      <p className="whitespace-pre-line text-[11px] md:text-[12px] font-semibold leading-[1.35] font-black text-white/85">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  {index !== stats.length - 1 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 h-[72px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* White area under hero so stats card overlaps 50% here */}
      <div className="h-[95px] md:h-[105px] bg-white" />
    </section>
  );
}
