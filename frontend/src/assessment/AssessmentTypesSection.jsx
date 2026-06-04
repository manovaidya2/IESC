import React from "react";
import {
  Brain,
  Wrench,
  Lightbulb,
  FileText,
  HardHat,
  ShieldCheck,
  Award,
  UsersRound,
  MonitorCheck,
  Settings,
} from "lucide-react";

export default function AssessmentTypesSection() {
  const assessments = [
    {
      icon: Brain,
      title: "Technical Knowledge\nAssessment",
      text: "Evaluate theoretical knowledge and engineering fundamentals.",
    },
    {
      icon: Wrench,
      title: "Practical Skills\nAssessment",
      text: "Hands-on evaluation of practical skills and technical abilities.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving\nAssessment",
      text: "Assess analytical thinking and problem-solving capabilities.",
    },
    {
      icon: FileText,
      title: "Project & Design\nAssessment",
      text: "Evaluate design approach, project planning, and execution.",
    },
    {
      icon: HardHat,
      title: "Workplace Competency\nAssessment",
      text: "Assess real-world workplace performance and behavior.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Compliance\nAssessment",
      text: "Evaluate safety knowledge and regulatory compliance.",
    },
    {
      icon: Award,
      title: "Quality & Standards\nAssessment",
      text: "Assess understanding of quality management and standards.",
    },
    {
      icon: UsersRound,
      title: "Leadership & Management\nAssessment",
      text: "Evaluate leadership, communication, and management skills.",
    },
    {
      icon: MonitorCheck,
      title: "Digital & Software\nAssessment",
      text: "Assess proficiency in engineering software and digital tools.",
    },
    {
      icon: Settings,
      title: "Specialized Engineering\nAssessment",
      text: "Domain-specific assessments for advanced technical roles.",
    },
  ];

  return (
    <section className="bg-white text-[#111] px-5 lg:px-10 py-[34px]">
      <div className="mx-auto ">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-8">
          <div>
            <p className="text-[#ed1c1c] text-[12px] font-bold font-black uppercase mb-3">
              ASSESSMENT TYPES
            </p>

            <h2 className="text-[30px] md:text-[34px] font-bold leading-[1.2] font-black">
              Comprehensive Assessment Categories
            </h2>
          </div>

          <p className="max-w-[610px] text-[16px] leading-[1.7] font-medium text-[#333] lg:pt-7">
            Our assessment programs cover a wide range of engineering disciplines
            and competency levels to support your professional growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {assessments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-[150px] rounded-[5px] border border-[#dddddd] bg-white px-3 py-5 shadow-[0_3px_14px_rgba(0,0,0,.04)]"
              >
                <div className="flex items-start gap-5">
                  <Icon
                    size={38}
                    strokeWidth={1.45}
                    className="text-[#ff2a2a] shrink-0 mt-1"
                  />

                  <div>
                    <h3 className="whitespace-pre-line text-[14px] font-bold leading-[1.45] font-black mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[10px] leading-[1.75] font-medium text-[#333] max-w-[195px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}