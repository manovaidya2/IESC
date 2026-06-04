import React from "react";
import {
  BookOpen,
  FileText,
  PlayCircle,
  Download,
  UsersRound,
  ArrowRight,
} from "lucide-react";
import resourceCtaBg from "../images/whatimg.png";

export default function ResourceLibraryGlanceSection() {
  const stats = [
    {
      icon: BookOpen,
      value: "2,500+",
      label: "Publications &\nDocuments",
      red: true,
    },
    {
      icon: FileText,
      value: "350+",
      label: "Technical Articles\n& White Papers",
    },
    {
      icon: PlayCircle,
      value: "200+",
      label: "Webinars &\nVideos",
      red: true,
    },
    {
      icon: Download,
      value: "150+",
      label: "Tools &\nTemplates",
    },
    {
      icon: UsersRound,
      value: "50K+",
      label: "Active Resource\nUsers",
      red: true,
    },
  ];

  return (
    <section className="bg-white px-5 lg:px-10 py-[34px] text-[#111]">
      <div className=" mx-auto space-y-7">
        <div className="rounded-[10px] bg-[#f4f4f3] px-8 py-4 grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <div>
            <h2 className="text-[28px] leading-[1.2] font-bold font-black mb-3">
              Resource Library <br />
              At a Glance
            </h2>

            <p className="text-[14px] leading-[1.75] font-semibold text-[#333] max-w-[250px]">
              Thousands of resources. One mission: Empowering engineering
              excellence worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="relative px-5 py-3 text-center"
                >
                  <Icon
                    size={48}
                    strokeWidth={1.55}
                    className={`mx-auto mb-3 ${
                      item.red ? "text-[#ff1f1f]" : "text-[#111]"
                    }`}
                  />

                  <h3 className="text-[24px] font-bold leading-none font-black mb-2">
                    {item.value}
                  </h3>

                  <p className="whitespace-pre-line text-[14px]  leading-[1.45] font-semibold text-[#222]">
                    {item.label}
                  </p>

                  {index !== stats.length - 1 && (
                    <span className="hidden md:block absolute right-0 top-1/2 h-[150px] w-[1px] -translate-y-1/2 bg-[#d7d7d7]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="relative min-h-[200px] rounded-[8px] overflow-hidden bg-cover bg-center text-white"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(1,8,13,.98) 0%,
                rgba(1,8,13,.88) 36%,
                rgba(1,8,13,.38) 62%,
                rgba(1,8,13,.12) 100%
              ),
              url(${resourceCtaBg})
            `,
          }}
        >
          <div className="relative z-10 px-8 py-5 max-w-[560px]">
            <h2 className="text-[24px] md:text-[26px] font-bold leading-[1.15] font-black mb-4">
              Can’t Find What You’re Looking For?
            </h2>

            <p className="text-[15px] leading-[1.65] font-semibold text-white/85 max-w-[470px] mb-4">
              Our team is here to help you find the right resources. Submit a
              request and we’ll get back to you.
            </p>

            <button className="h-[40px] px-5 bg-[#ff1f1f] text-white text-[14px] font-bold font-black rounded-[4px] flex items-center gap-5">
              Request a Resource
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}