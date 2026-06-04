import React from "react";
import {
  FilePenLine,
  BookOpen,
  ClipboardCheck,
  Settings,
  Award,
  Globe2,
  UsersRound,
  Landmark,
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import careerImg from "../images/certificate.png";

export default function CertificationJourneySection() {
  const journey = [
    {
      icon: FilePenLine,
      no: "01",
      title: "Choose Program",
      text: "Select the certification program that aligns with your career goals.",
    },
    {
      icon: BookOpen,
      no: "02",
      title: "Enroll & Learn",
      text: "Access learning materials, LMS, and expert-led training modules.",
    },
    {
      icon: ClipboardCheck,
      no: "03",
      title: "Assessments",
      text: "Complete online tests, assignments, and practical evaluations.",
    },
    {
      icon: Settings,
      no: "04",
      title: "Practical Evaluation",
      text: "Undergo hands-on practical assessment at an authorized assessment centre.",
    },
    {
      icon: Award,
      no: "05",
      title: "Certification",
      text: "Earn your industry-recognized certificate and digital credentials.",
    },
  ];

  const stats = [
    {
      icon: Globe2,
      value: "120+",
      title: "Certification Programs",
      text: "Industry-aligned and future-ready",
    },
    {
      icon: UsersRound,
      value: "18,500+",
      title: "Certified Professionals",
      text: "Globally recognized engineering credentials",
    },
    {
      icon: Landmark,
      value: "1,250+",
      title: "Institutional Partners",
      text: "Engineering institutes and training centers",
    },
    {
      icon: BadgeCheck,
      value: "320+",
      title: "Assessment Centres",
      text: "Authorized practical assessment network",
    },
    {
      icon: ShieldCheck,
      value: "45+",
      title: "Countries",
      text: "Global presence and growing network",
    },
  ];

  return (
    <section className="bg-white text-[#111] px-5 py-4">
      <div className=" mx-auto space-y-3">
        {/* Certification Journey */}
        <div className="bg-[#f7f7f6] rounded-[3px] px-7 py-7">
          <div className="grid lg:grid-cols-[230px_1fr] gap-8 items-start">
            <div>
              <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-2">
                Certification Journey
              </p>

              <h2 className="text-[26px] leading-[1.12] font-bold font-black mb-4">
                Your Path to <br />
                Certification
              </h2>

              <p className="text-[11px] leading-[1.7] font-medium text-[#333] max-w-[210px]">
                Our structured certification process ensures that you gain the
                right knowledge, practical skills, and industry recognition.
              </p>
            </div>

            <div className="relative pt-2">
              <div className="hidden lg:block absolute left-[3%] right-[3%] top-[28px] border-t border-dashed border-[#8a8a8a]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.no} className="relative text-center">
                      <div className="mx-auto mb-4 h-[48px] w-[48px] rounded-[4px] bg-[#f7f7f6] flex items-center justify-center">
                        <Icon
                          size={38}
                          strokeWidth={1.35}
                          className="text-[#111]"
                        />
                      </div>

                      {index !== journey.length - 1 && (
                        <ArrowRight
                          size={16}
                          className="hidden lg:block absolute top-[20px] right-[-20px] text-[#ed1c1c]"
                        />
                      )}

                      <p className="text-[#ed1c1c] text-[10px] font-black mb-2">
                        {item.no}
                      </p>

                      <h3 className="text-[14px] font-bold font-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[11px] leading-[1.55] font-medium text-[#333] max-w-[135px] mx-auto">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#020b10] text-white rounded-[3px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative px-8 py-7 flex items-start gap-5"
              >
                <Icon size={42} strokeWidth={1.4} className="text-white/90" />

                <div>
                  <h3 className="text-[24px] font-bold leading-none font-black mb-2">
                    {item.value}
                  </h3>

                  <p className="text-[11px] font-semibold font-black mb-1">
                    {item.title}
                  </p>

                  <p className="text-[10px] leading-[1.45] text-white/75 max-w-[120px]">
                    {item.text}
                  </p>
                </div>

                {index !== stats.length - 1 && (
                  <span className="hidden lg:block absolute right-0 top-1/2 h-[70px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="relative min-h-[195px] rounded-[3px] overflow-hidden bg-cover bg-center text-white"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(1,8,13,.96) 0%,
                rgba(1,8,13,.88) 35%,
                rgba(1,8,13,.45) 62%,
                rgba(1,8,13,.18) 100%
              ),
              url(${careerImg})
            `,
          }}
        >
          <div className="relative z-10 px-8 py-8 max-w-[540px]">
            <h2 className="text-[30px] leading-[1.15] font-bold font-black mb-1">
              Advance Your Engineering Career
            </h2>

            <p className="text-[#ed1c1c] text-[15px]  font-bold font-black mb-4">
              Get Certified. Get Recognized. Get Ahead.
            </p>

            <p className="text-[13px] leading-[1.65] font-semibold text-[#e2e8eb] mb-5">
              IESC certifications validate your competence, enhance your
              professional credibility, and open doors to global career
              opportunities.
            </p>

            <button className="h-[40px] px-6 bg-[#ed1c1c] text-white text-[12px] font-semibold font-black rounded-[3px] flex items-center gap-4">
              Browse All Certifications
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}