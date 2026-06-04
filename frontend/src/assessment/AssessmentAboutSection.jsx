import React from "react";
import {
  Target,
  ShieldCheck,
  ClipboardCheck,
  Globe2,
  UsersRound,
  Landmark,
  BadgeCheck,
  Gauge,
} from "lucide-react";
import assessmentImg from "../images/assesment.png";

export default function AssessmentAboutSection() {
  const features = [
    {
      icon: Target,
      title: "Industry Aligned",
      text: "Based on real industry requirements and global engineering standards.",
    },
    {
      icon: ShieldCheck,
      title: "Objective & Fair",
      text: "Transparent evaluation processes with unbiased assessment criteria.",
    },
    {
      icon: ClipboardCheck,
      title: "Competency Focused",
      text: "Assessing practical skills, knowledge, and professional competence.",
    },
    {
      icon: Globe2,
      title: "Global Recognition",
      text: "Industry-recognized assessments accepted worldwide.",
    },
  ];

  const stats = [
    {
      icon: UsersRound,
      value: "18,500+",
      label: "Assessments\nConducted",
    },
    {
      icon: Globe2,
      value: "45+",
      label: "Countries\nWorldwide",
    },
    {
      icon: Landmark,
      value: "320+",
      label: "Authorized\nAssessment Centres",
    },
    {
      icon: Gauge,
      value: "85%",
      label: "Assessment\nSuccess Rate",
    },
  ];

  return (
    <section className="bg-white text-[#111] py-[52px] px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid gap-14 items-center lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-[#ed1c1c] text-[13px] font-bold font-black uppercase mb-5">
            ABOUT OUR ASSESSMENTS
          </p>

          <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-[1.12] font-black mb-5">
            Validating Competence. <br />
            Ensuring Excellence.
          </h2>

          <p className="max-w-[650px] text-[15px] sm:text-[16px] leading-[1.75] font-semibold text-[#333] mb-2">
            IESC industrial competency assessments are designed to evaluate and
            validate the real-world skills, technical knowledge, and practical
            abilities of engineering professionals.
          </p>

          <p className="max-w-[650px] text-[15px] sm:text-[16px] leading-[1.75] font-semibold text-[#333] mb-6">
            Our assessments are developed by industry experts and aligned with
            international standards to ensure credibility, reliability, and
            relevance across global industries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`pr-0 sm:pr-6 ${
                    index !== features.length - 1
                      ? "md:border-r border-[#dddddd]"
                      : ""
                  } ${index !== 0 ? "md:pl-6" : ""}`}
                >
                  <Icon
                    size={42}
                    strokeWidth={1.45}
                    className="text-[#ff2a2a] mb-6"
                  />

                  <h3 className="text-[14px] font-black font-bold mb-3 min-h-[20px]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] sm:text-[11px] leading-[1.6] font-medium text-[#333] min-h-[54px] md:max-w-[140px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative rounded-[4px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,.16)]">
          <img
            src={assessmentImg}
            alt="Assessment"
            className="h-[360px] sm:h-[420px] lg:h-[470px] w-full object-cover"
          />

          <div className="bg-[#020b10]/88 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 md:absolute md:left-0 md:right-0 md:bottom-0">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="relative px-4 sm:px-6 py-5 sm:py-6 text-center text-white"
                >
                  <Icon
                    size={34}
                    strokeWidth={1.4}
                    className="mx-auto text-white/90 mb-3"
                  />

                  <h3 className="text-[25px] font-bold leading-none font-black mb-3">
                    {item.value}
                  </h3>

                  <p className="whitespace-pre-line text-[13px] leading-[1.45] font-semibold text-white/85">
                    {item.label}
                  </p>

                  {index !== stats.length - 1 && (
                    <span className="hidden md:block absolute right-0 top-1/2 h-[88px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}