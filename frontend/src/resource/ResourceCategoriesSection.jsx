import React from "react";
import {
  FileText,
  GraduationCap,
  PlayCircle,
  BookOpen,
  Download,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export default function ResourceCategoriesSection() {
  const categories = [
    {
      icon: FileText,
      red: true,
      title: "Standards &\nPublications",
      text: "Access standards, technical specifications, and official publications.",
    },
    {
      icon: GraduationCap,
      title: "Guidelines &\nBest Practices",
      text: "Industry guidelines and best practices for safer, smarter engineering.",
    },
    {
      icon: FileText,
      red: true,
      title: "White Papers &\nTechnical Articles",
      text: "In-depth research, technical articles, and expert insights.",
    },
    {
      icon: PlayCircle,
      title: "Webinars &\nVideos",
      text: "Watch expert sessions, tutorials, and industry webinars.",
    },
    {
      icon: BookOpen,
      red: true,
      title: "Case Studies &\nSuccess Stories",
      text: "Real-world examples of standards driving industry success.",
    },
    {
      icon: Download,
      title: "Tools &\nTemplates",
      text: "Download tools, checklists, and templates to support your work.",
    },
    {
      icon: BarChart3,
      red: true,
      title: "Research &\nReports",
      text: "Access market research, industry reports, and data insights.",
    },
    {
      icon: Megaphone,
      title: "News &\nUpdates",
      text: "Stay informed with the latest news, updates, and announcements.",
    },
  ];

  return (
    <section className="bg-[#f8f8f7] text-[#111] px-5 lg:px-10 py-[30px]">
      <div className="mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.15] font-black mb-2">
            Resource Categories
          </h2>

          <p className="text-[13px] md:text-[16px] leading-[1.6] font-semibold text-[#333]">
            Find the information and tools you need across key areas of
            engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-[250px] rounded-[8px] bg-white border border-[#e7e7e7] shadow-[0_3px_12px_rgba(0,0,0,.05)] px-4 py-5 text-center flex flex-col items-center"
              >
                <Icon
                  size={46}
                  strokeWidth={1.6}
                  className={`mb-5 ${
                    item.red ? "text-[#ff1f1f]" : "text-[#111]"
                  }`}
                />

                <h3 className="whitespace-pre-line text-[15px] font-bold md:text-[13px] leading-[1.3] font-black mb-2 min-h-[30px]">
                  {item.title}
                </h3>

                <p className="text-[12px] md:text-[13px] leading-[1.6] font-semibold text-[#333] mb-1 max-w-[150px] min-h-[55px]">
                  {item.text}
                </p>

                <button className="mt-auto text-[#ff1f1f] text-[12px] font-bold md:text-[13px] font-black flex items-center gap-3">
                  Explore
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}