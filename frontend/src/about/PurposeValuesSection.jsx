import React from "react";
import {
  Target,
  ClipboardCheck,
  FileCheck2,
  Building2,
  Globe2,
  ShieldCheck,
  UsersRound,
  Star,
  Lightbulb,
  Quote,
} from "lucide-react";

export default function PurposeValuesSection() {
  const purposes = [
    {
      icon: Target,
      title: "Develop Standards",
      text: "Creating globally benchmarked engineering standards and guidelines for all major disciplines.",
    },
    {
      icon: ClipboardCheck,
      title: "Assess Competency",
      text: "Rigorous assessment systems that validate practical skills, knowledge, and professional competence.",
    },
    {
      icon: FileCheck2,
      title: "Certify Professionals",
      text: "Industry-recognized certifications and professional memberships that build credibility and trust.",
    },
    {
      icon: Building2,
      title: "Empower Institutions",
      text: "Partnering with institutions and industries to uplift engineering education and workforce quality.",
    },
    {
      icon: Globe2,
      title: "Drive Global Impact",
      text: "Strengthening engineering ecosystems and contributing to infrastructure and industrial development worldwide.",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      text: "We uphold transparency, ethical practices, and accountability in everything we do.",
    },
    {
      icon: UsersRound,
      title: "Collaboration",
      text: "We believe in the power of partnerships and collective progress.",
    },
    {
      icon: Star,
      title: "Excellence",
      text: "We are committed to the highest standards of quality and continuous improvement.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We embrace new ideas and technologies to shape the future of engineering.",
    },
  ];

  return (
    <section className="bg-white text-[#111] overflow-hidden">
      {/* Our Purpose */}
      <div className="mx-auto px-5 sm:px-6 lg:px-[50px] py-[38px] sm:py-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 lg:mb-12">
          <div>
            <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-3">
              OUR PURPOSE
            </p>

            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] leading-[1.18] font-semibold">
              Engineering Standards <br />
              That Build a Better Tomorrow
            </h2>
          </div>

          <p className="text-[13px] sm:text-[14px] leading-[1.75] font-medium text-[#222] max-w-[620px] pt-0 lg:pt-7">
            We develop and govern internationally accepted engineering standards
            and competency frameworks that support professionals, organizations,
            and industries in achieving excellence, innovation, and sustainable
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 sm:gap-y-10 lg:gap-y-0">
          {purposes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`pr-0 sm:pr-8 border-b sm:border-b-0 border-[#dddddd] pb-6 sm:pb-0 ${
                  index !== purposes.length - 1
                    ? "lg:border-r border-[#dddddd]"
                    : ""
                } ${index !== 0 ? "lg:pl-8" : ""}`}
              >
                <Icon
                  size={36}
                  strokeWidth={1.55}
                  className="text-[#ff2a2a] mb-3"
                />

                <h3 className="text-[15px] font-bold font-black mb-2">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-[1.75] font-medium text-[#333] max-w-full lg:max-w-[150px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-[#f3f3f2]">
        <div className="mx-auto px-5 sm:px-6 lg:px-[50px] py-[36px] lg:py-[34px] grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-6">
              OUR VALUES
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-9">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 sm:gap-5">
                    <Icon
                      size={28}
                      strokeWidth={1.35}
                      className="text-[#222] shrink-0 mt-1"
                    />

                    <div>
                      <h3 className="text-[16px] font-bold font-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[12px] leading-[1.65] font-medium text-[#333] max-w-full sm:max-w-[310px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#020b10] min-h-[220px] p-6 sm:p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,.12),transparent_35%)]" />

            <Quote
              size={28}
              className="text-[#ed1c1c] mb-4 relative z-10"
              fill="#ed1c1c"
            />

            <p className="relative z-10 text-white text-[14px] sm:text-[17px] leading-[1.65] font-medium max-w-[480px]">
              Our vision is to be the most trusted global engineering standards
              and certification council, recognized for shaping competent
              professionals and advancing the engineering profession for a
              better, safer, and more sustainable world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}