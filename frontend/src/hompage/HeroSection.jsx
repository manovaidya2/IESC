import React from "react";
import {
  ArrowRight,
  Globe2,
  UserRound,
  Landmark,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import img1 from "../images/hero.png";

export default function HeroSection() {
  const scrollToPrograms = () => {
    document
      .getElementById("engineering-disciplines")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    { icon: Globe2, value: "45+", label: "Countries" },
    { icon: UserRound, value: "18,500+", label: "Certified Professionals" },
    { icon: Landmark, value: "1,250+", label: "Institutional Partners" },
    {
      icon: ShieldCheck,
      value: "320+",
      label: "Authorized Assessment\nCentres",
    },
    {
      icon: BadgeCheck,
      value: "850+",
      label: "Engineering Standards\n& Frameworks",
    },
  ];

  return (
    <section
      className="
      relative
      min-h-[650px] md:min-h-[560px]
      overflow-visible
      text-white
      bg-cover bg-center
      pb-[230px] md:pb-[50px]
      -mb-[140px] md:-mb-[120px]
    "
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(1,8,13,.98) 0%,
          rgba(1,8,13,.86) 32%,
          rgba(1,8,13,.40) 58%,
          rgba(1,8,13,.92) 100%
        ),
        url(${img1})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#00080c]" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-5 sm:px-8 md:px-12 lg:px-[70px] pt-6 sm:pt-8 md:pt-10 lg:pt-[40px] gap-8 lg:gap-0">
        
        {/* Left Content */}
        <div className=" text-center lg:text-left">
          <p className="mb-3 md:mb-[16px] text-sm md:text-[18px] font-black uppercase tracking-[0.5px] text-[#e6e8ea]">
            GLOBAL STANDARDS FOR
          </p>

          <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[1.2] md:leading-[1.12] font-bold font-black tracking-[1.5px] md:tracking-[2.2px] uppercase text-white">
            ENGINEERING <br className="hidden sm:block" />
            COMPETENCY & <br className="hidden sm:block" />
            INDUSTRIAL <br className="hidden sm:block" />
            EXCELLENCE
          </h1>

          <p className="mt-4 md:mt-[16px] max-w-[520px] text-sm md:text-[15px] leading-[1.5] md:leading-[1.55] font-semibold text-[#d7dde1] mx-auto lg:mx-0">
            International engineering certifications,
            practical assessments,
            professional memberships &
            workforce verification systems built on
            German precision and global trust.
          </p>

          <div className="mt-6 md:mt-[28px] flex flex-col sm:flex-row gap-4 md:gap-[22px] justify-center lg:justify-start">

            <button
              type="button"
              onClick={scrollToPrograms}
              className="h-[42px] md:h-[48px] px-5 md:px-[26px] bg-[#ed1c1c] border-2 border-[#ed1c1c] text-white text-[11px] md:text-[12px] font-black tracking-[0.4px] uppercase flex items-center justify-center gap-3 md:gap-[15px] hover:bg-[#ed1c1c]/80 transition-all"
            >
              EXPLORE PROGRAMS
              <ArrowRight size={16} />
            </button>

            <button className="h-[42px] md:h-[48px] px-5 md:px-[26px] bg-black/25 border-2 border-white/45 text-white text-[11px] md:text-[12px] font-black tracking-[0.4px] uppercase flex items-center justify-center gap-3 md:gap-[15px] hover:bg-black/40 transition-all">
              VERIFY CREDENTIALS
              <ArrowRight size={16} />
            </button>

          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:block mt-[80px] w-[150px] font-bold border-l border-white/45 pl-[24px]">
          {[
            ["01", "Standards", true],
            ["02", "Certify"],
            ["03", "Assess"],
            ["04", "Verify"],
          ].map(([num, text, active]) => (
            <div
              key={num}
              className={`mb-[27px] ${
                active
                  ? "border-l-[3px] border-[#ed1c1c] pl-[20px] -ml-[26px]"
                  : ""
              }`}
            >
              <span
                className={`text-[27px] font-black ${
                  active
                    ? "text-[#ed1c1c]"
                    : "text-[#e5e7e9]"
                }`}
              >
                {num}
              </span>

              <p className="mt-[6px] text-[12px] font-bold text-[#dce0e3]">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Stats Bar */}
      <div
        className="
        absolute
        left-1/2
        bottom-[-220px] md:bottom-0
        z-20
        w-[calc(100%-20px)]
        sm:w-[calc(100%-40px)]
        md:w-[calc(100%-80px)]
        lg:w-[calc(100%-140px)]

        -translate-x-1/2
        md:translate-y-1/2

        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-5

        gap-4 sm:gap-6 lg:gap-0

        bg-[#031217]/95
        backdrop-blur-sm
        border border-white/[0.04]
        shadow-[0_15px_50px_rgba(0,0,0,.55)]

        p-4 sm:p-5 lg:p-0
        rounded-xl
      "
      >
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.value}
              className="relative text-center py-3 lg:py-[25px] px-2"
            >
              <Icon
                className="mx-auto text-[#e6e9eb] w-8 h-8"
                strokeWidth={1.55}
              />

              <h3 className="mt-2 text-xl md:text-2xl font-semibold lg:text-[28px] font-black text-white">
                {item.value}
              </h3>

              <p className="whitespace-pre-line text-[11px] md:text-[13px] font-semibold leading-[1.35] text-[#e0e4e7]">
                {item.label}
              </p>

              {index !== stats.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-1/2 h-[80px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
