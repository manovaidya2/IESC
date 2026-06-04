import React from "react";
import {
  Gem,
  ShieldCheck,
  BadgeCheck,
  UsersRound,
  Globe2,
  UserRound,
  Landmark,
} from "lucide-react";
import plantImg from "../images/benchmark.png";

export default function EngineeringBenchmarkSection() {
  const features = [
    {
      icon: Gem,
      title: "Global Authority",
      text: "Internationally recognized engineering standards and frameworks.",
    },
    {
      icon: ShieldCheck,
      title: "Industry Driven",
      text: "Built with industry collaboration and real world engineering needs.",
    },
    {
      icon: BadgeCheck,
      title: "Competency Focused",
      text: "Ensuring professionals meet the highest competency benchmarks.",
    },
    {
      icon: UsersRound,
      title: "Future Ready",
      text: "Empowering engineers for emerging technologies and global challenges.",
    },
  ];

  const stats = [
    { icon: Globe2, value: "45+", label: "Countries" },
    { icon: UserRound, value: "18,500+", label: "Certified Professionals" },
    { icon: Landmark, value: "1,250+", label: "Institutional Partners" },
    { icon: ShieldCheck, value: "320+", label: "Authorized Centres" },
  ];

  return (
    <section className="bg-[#f7f7f5]">
    <div className="grid lg:grid-cols-2 min-h-[480px]">
       <div className="px-5 md:px-10 lg:px-[55px] py-[38px] flex flex-col justify-center">
          <p className="text-[#ed1c1c] text-[12px] font-black uppercase mb-3">
            WHO WE ARE
          </p>

        <h2 className="text-[28px] md:text-[36px] leading-[1.12] font-semibold text-[#111] mb-5">
            Setting Global Benchmarks <br />
            for Engineering Excellence
          </h2>

          <p className="max-w-[620px] text-[14px] leading-[1.75] font-medium text-[#222] mb-5">
            The International Engineering Standards Council (IESC) is an
            independent, non-profit engineering standards and certification
            authority committed to advancing global engineering excellence
            through robust standards, competency validation, practical
            assessments, and professional recognition.
          </p>

<p className="max-w-[620px] text-[13px] leading-[1.7] font-medium text-[#222] mb-[42px]">
            IESC bridges the gap between education, industry, and innovation by
            establishing internationally aligned frameworks that ensure safety,
            quality, reliability, and sustainability in engineering practices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`pr-5 ${
                    index !== features.length - 1
                      ? "border-r border-[#d7d7d7]"
                      : ""
                  } ${index !== 0 ? "pl-5" : ""}`}
                >
                  <Icon
                    size={34}
                    strokeWidth={1.35}
                    className="text-[#ff2a2a] mb-6"
                  />

                  <h3 className="text-[13px] font-black text-[#111] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[10px] leading-[1.7] font-medium text-[#333]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="relative min-h-[520px] lg:min-h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0,0,0,.08) 0%,
              rgba(0,0,0,.22) 45%,
              rgba(0,0,0,.88) 100%
            ), url(${plantImg})`,
          }}
        >
          <div className="absolute left-8 md:left-12 bg-black/50 bottom-[72px] text-white">
            <div className="w-[48px] h-[3px] bg-[#ed1c1c] mb-5" />

            <h3 className="text-[26px] leading-[1.25]  font-semibold mb-10">
              Engineering Excellence. <br />
              Global Impact.
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className={`pr-5 ${
                      index !== stats.length - 1
                        ? "border-r border-[#8f1111]"
                        : ""
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.4}
                      className="text-white/90 mb-4"
                    />

                    <h4 className="text-[22px] leading-none font-black">
                      {item.value}
                    </h4>

                    <p className="mt-1 text-[10px] text-white/80 font-medium">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}