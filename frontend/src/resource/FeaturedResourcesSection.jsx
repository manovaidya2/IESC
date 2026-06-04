import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedResourcesSection() {
  const resources = [
    {
      tag: "WHITE PAPER",
      tagRed: true,
      title: "The Future of Industrial\nAutomation Standards",
      text: "Explore emerging trends and standards shaping the future of automation.",
      action: "Download PDF",
      img: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=700&auto=format&fit=crop",
    },
    {
      tag: "TECHNICAL ARTICLE",
      title: "Sustainability in\nEngineering Design",
      text: "Best practices for integrating sustainability into engineering standards.",
      action: "Read Article",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=700&auto=format&fit=crop",
    },
    {
      tag: "CASE STUDY",
      title: "Improving Safety in\nConstruction Projects",
      text: "How adopting IESC standards reduced incidents by 40% in a global construction firm.",
      action: "View Case Study",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=700&auto=format&fit=crop",
    },
    {
      tag: "WEBINAR",
      tagRed: true,
      title: "Understanding the Latest\nStandards Updates",
      text: "Join our experts for an overview of the latest standards and what they mean for you.",
      action: "Watch Now",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=700&auto=format&fit=crop",
    },
    {
      tag: "TEMPLATE",
      title: "Risk Assessment\nChecklist",
      text: "Use this comprehensive checklist to identify and mitigate project risks.",
      action: "Download",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop",
    },
    {
      tag: "INDUSTRY REPORT",
      title: "Global Engineering\nTrends 2024",
      text: "Key insights and data on the current state and future outlook of the engineering industry.",
      action: "View Report",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=700&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white text-[#111] px-5 lg:px-10 py-[30px]">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] md:text-[30px] font-bold">
            Featured Resources
          </h2>

          <button className="hidden sm:flex items-center gap-2 text-[#ff1f1f] text-[12px] font-semibold">
            View All Resources
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-[8px] overflow-hidden bg-white border border-[#e6e6e6] shadow-[0_2px_10px_rgba(0,0,0,.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,.08)] transition-all duration-300"
            >
              <div className="h-[145px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title.replace("\n", " ")}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-4 py-4">
                <span
                  className={`inline-flex px-3 py-[5px] rounded-full text-[9px] font-bold text-white mb-3 ${
                    item.tagRed ? "bg-[#ff1f1f]" : "bg-[#070b0e]"
                  }`}
                >
                  {item.tag}
                </span>

                <h3 className="whitespace-pre-line text-[14px] leading-[1.35] font-bold mb-2 min-h-[42px]">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-[1.7] font-medium text-[#444] min-h-[80px] mb-2">
                  {item.text}
                </p>

                <button className="text-[#ff1f1f] text-[12px] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  {item.action}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="sm:hidden mt-5 flex items-center gap-2 text-[#ff1f1f] text-[12px] font-semibold">
          View All Resources
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}