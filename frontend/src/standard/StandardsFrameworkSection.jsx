import React from "react";
import {
  FileText,
  UsersRound,
  ClipboardCheck,
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function StandardsFrameworkSection() {
  const steps = [
    {
      icon: FileText,
      no: "01",
      title: "Research & Analysis",
      text: "Identify industry needs and technical gaps",
    },
    {
      icon: UsersRound,
      no: "02",
      title: "Expert Consultation",
      text: "Collaborate with global technical experts",
    },
    {
      icon: ClipboardCheck,
      no: "03",
      title: "Draft Development",
      text: "Create draft standards and frameworks",
      active: true,
    },
    {
      icon: BadgeCheck,
      no: "04",
      title: "Industry Validation",
      text: "Review, test, and validate with industry",
    },
    {
      icon: ShieldCheck,
      no: "05",
      title: "Publication",
      text: "Publish and disseminate globally",
    },
  ];

  return (
    <section className="bg-white px-5 lg:px-10 py-8">
      <div className="max-w-[1380px] mx-auto bg-[#f3f3f2] rounded-[6px] px-6 py-8">
        <div className="grid lg:grid-cols-[310px_1fr] gap-10 items-center">
          
          <div>
            <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-3">
              Standards Framework
            </p>

            <h2 className="text-[26px] md:text-[21px] font-bold leading-[1.2] font-black mb-5">
              A Structured Framework for <br />
              Global Engineering Excellence
            </h2>

            <p className="text-[13px] leading-[1.7] font-semibold text-[#333] max-w-[285px] mb-6">
              IESC standards follow a rigorous framework aligned with
              international best practices and industry needs.
            </p>

            <button className="h-[42px] px-5 border border-[#ed1c1c] font-semibold text-[#ed1c1c] bg-white text-[13px] font-black rounded-[3px] flex items-center gap-5">
              Explore Framework
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-[6%] right-[6%] top-[42px] border-t-2 border-dashed border-[#9b9b9b]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.no} className="relative text-center">
                    <div
                      className={`mx-auto h-[74px] w-[74px] rounded-full flex items-center justify-center mb-4 ${
                        item.active ? "bg-[#ed1c1c]" : "bg-[#080d10]"
                      }`}
                    >
                      <Icon
                        size={34}
                        strokeWidth={1.4}
                        className="text-white"
                      />
                    </div>

                    {index !== steps.length - 1 && (
                      <ArrowRight
                        size={18}
                        className="hidden lg:block absolute top-[33px] right-[-22px] text-[#222]"
                      />
                    )}

                    <p
                      className={`text-[15px] font-black mb-1 ${
                        item.active ? "text-[#ed1c1c]" : "text-[#111]"
                      }`}
                    >
                      {item.no}
                    </p>

                    <h3 className="text-[13px] font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[11px] leading-[1.6] font-semibold text-[#333] max-w-[145px] mx-auto">
                      {item.text}
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