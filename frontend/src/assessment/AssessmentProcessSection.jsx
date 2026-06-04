import React from "react";
import {
  UserPlus,
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  ShieldCheck,
  BadgeCheck,
  FileText,
  Landmark,
  Globe2,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function AssessmentProcessSection() {
  const process = [
    {
      icon: UserPlus,
      no: "01",
      title: "Registration",
      text: "Register and select your assessment program.",
    },
    {
      icon: CalendarDays,
      no: "02",
      title: "Assessment Booking",
      text: "Choose assessment date and authorized centre.",
    },
    {
      icon: BookOpen,
      no: "03",
      title: "Pre-Assessment\nPreparation",
      text: "Access guidelines and preparation materials.",
    },
    {
      icon: ClipboardCheck,
      no: "04",
      title: "Assessment\nExecution",
      text: "Complete online or practical assessment.",
    },
    {
      icon: ShieldCheck,
      no: "05",
      title: "Evaluation &\nVerification",
      text: "Assessment evaluated by industry experts.",
    },
    {
      icon: BadgeCheck,
      no: "06",
      title: "Results &\nCertification",
      text: "Receive results and digital credentials.",
    },
  ];

  const stats = [
    {
      icon: FileText,
      value: "18,500+",
      label: "Assessments\nConducted",
    },
    {
      icon: Landmark,
      value: "320+",
      label: "Authorized\nAssessment Centres",
    },
    {
      icon: Globe2,
      value: "45+",
      label: "Countries\nWorldwide",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Assessment\nSuccess Rate",
    },
    {
      icon: Handshake,
      value: "98%",
      label: "Employer\nAcceptance Rate",
    },
  ];

  return (
    <section className="bg-white py-10 px-5 lg:px-10">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-3">
            OUR ASSESSMENT PROCESS
          </p>

          <h2 className="text-[28px] font-bold md:text-[35px] leading-[1.15] font-black text-[#111]">
            A Structured Approach to Competency Validation
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-10">
          <div className="hidden lg:block absolute left-[7%] right-[7%] top-[42px] border-t-2 border-dashed border-[#cfcfcf]" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.no} className="text-center relative">
                  <div className="mx-auto mb-5 h-[82px] w-[82px] rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,.12)] border border-[#ececec] flex items-center justify-center">
                    <Icon
                      size={38}
                      strokeWidth={1.5}
                      className="text-[#222]"
                    />
                  </div>

                  {index !== process.length - 1 && (
                    <span className="hidden lg:flex absolute top-[33px] right-[-18px] text-[#ed1c1c] text-xl font-bold">
                      →
                    </span>
                  )}

                  <p className="text-[#ed1c1c] text-[18px] font-black mb-2">
                    {item.no}
                  </p>

                  <h3 className="whitespace-pre-line text-[15px] font-bold font-black leading-[1.4] mb-2 text-[#111]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-[1.7] text-[#444] font-medium max-w-[170px] mx-auto">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="rounded-[6px] overflow-hidden bg-[#020b10]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="relative px-8 py-8 flex items-center justify-center text-white"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={42}
                      strokeWidth={1.4}
                      className="text-white shrink-0"
                    />

                    <div>
                      <h3 className="text-[26px] font-black leading-none mb-2">
                        {item.value}
                      </h3>

                      <p className="whitespace-pre-line text-[13px] leading-[1.5] font-semibold text-white/85">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  {index !== stats.length - 1 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 h-[80px] w-[1px] -translate-y-1/2 bg-[#8f1111]" />
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