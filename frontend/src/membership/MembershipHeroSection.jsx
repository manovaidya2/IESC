import React from "react";
import {
  ChevronRight,
  Download,
  GitCompare,
  UsersRound,
  Globe2,
  Award,
  ShieldCheck,
} from "lucide-react";
import membershipHero from "../images/memberhero.png";

export default function MembershipHeroSection() {
  const scrollToMembershipLevels = () => {
    document
      .getElementById("membership-levels")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    {
      icon: UsersRound,
      value: "25,000+",
      label: "Active Members",
      red: true,
    },
    {
      icon: Globe2,
      value: "45+",
      label: "Countries",
    },
    {
      icon: Award,
      value: "120+",
      label: "Industries",
    },
    {
      icon: ShieldCheck,
      value: "Global Recognition",
      label: "Industry Trusted",
      textOnly: true,
    },
  ];

  return (
    <section
      className="relative min-h-[600px] sm:min-h-[560px] lg:min-h-[520px] overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(1,8,13,.96) 0%,
          rgba(1,8,13,.86) 34%,
          rgba(1,8,13,.28) 60%,
          rgba(1,8,13,.15) 100%
        ), url(${membershipHero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto px-5 sm:px-6 lg:px-10 pt-[34px] sm:pt-[42px] lg:pt-[48px] pb-8 lg:pb-0">
        <div className="max-w-[570px]">
          <div className="flex items-center flex-wrap gap-2 text-[11px] sm:text-[12px] font-bold text-white/85 mb-5 sm:mb-7">
            <span>Home</span>
            <ChevronRight size={13} />
            <span className="text-[#ed1c1c]">Membership</span>
            <span>Programs</span>
          </div>

          <h1 className="text-[34px] sm:text-[40px] md:text-[47px] leading-[1.15] font-bold font-black tracking-[0.2px] mb-5">
            Engineering Membership <br />
            Programs
          </h1>

          <div className="w-[70px] h-[3px] bg-[#ed1c1c] mb-6" />

          <p className="max-w-[560px] text-[14px] sm:text-[16px] leading-[1.75] text-[#e1e6e9] font-semibold mb-7 sm:mb-8">
            Join a global community of engineers and technical professionals.
            Gain recognition, credibility and career advancement with IESC
            membership pathways.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="h-[42px] w-full sm:w-auto px-6 bg-[#ed1c1c] border-2 font-semibold border-[#ed1c1c] text-white text-[12px] font-black uppercase flex items-center justify-center gap-3">
              <Download size={17} />
              Membership Guide
            </button>

            <button
              type="button"
              onClick={scrollToMembershipLevels}
              className="h-[42px] w-full sm:w-auto px-6 bg-black/25 border-2 border-white/45 font-semibold text-white text-[12px] font-black uppercase flex items-center justify-center gap-3"
            >
              <GitCompare size={17} />
              Compare Memberships
            </button>
          </div>
        </div>

        <div className="mt-[28px] w-full max-w-[1080px] bg-[#031217]/82 backdrop-blur-sm border border-white/[0.04] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-[0_16px_40px_rgba(0,0,0,.45)]">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="relative flex items-center gap-5 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6 border-b sm:border-b-0 border-white/10"
              >
                <Icon
                  size={38}
                  strokeWidth={1.55}
                  className={item.red ? "text-[#ed1c1c]" : "text-white"}
                />

                <div>
                  <h3 className="text-[20px] sm:text-[24px] font-semibold leading-none font-black">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-[12px] sm:text-[13px] font-semibold font-black text-[#e1e6e9]">
                    {item.label}
                  </p>
                </div>

                {index !== stats.length - 1 && (
                  <span className="hidden lg:block absolute right-0 top-1/2 h-[68px] w-[1px] -translate-y-1/2 bg-white/35" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
