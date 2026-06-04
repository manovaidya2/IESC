import React, { useState } from "react";
import {
  Boxes,
  Cog,
  Zap,
  Factory,
  Hammer,
  Landmark,
  ShieldCheck,
  Leaf,
  Cpu,
  Settings,
  Bot,
  Wrench,
  HardHat,
  ArrowRight,
} from "lucide-react";
import mf from "../images/light.png";

export default function ProgramCategoriesSection() {
  const [active, setActive] = useState("All Programs");

  const categories = [
    { name: "All Programs", icon: Boxes },
    { name: "Mechanical Engineering", icon: Cog },
    { name: "Electrical Engineering", icon: Zap },
    { name: "Industrial Engineering", icon: Factory },
    { name: "Manufacturing & Automation", icon: Hammer },
    { name: "Civil & Structural Engineering", icon: Landmark },
    { name: "Quality & Safety", icon: ShieldCheck },
    { name: "Energy & Sustainability", icon: Leaf },
    { name: "IT & Emerging Technologies", icon: Cpu },
  ];

  const programs = [
    {
      icon: Cog,
      title: "Mechanical\nEngineering Practice",
      text: "Comprehensive mechanical engineering principles, design, analysis, and application.",
      img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Electrical Systems\nEngineering",
      text: "Electrical systems, power distribution, control systems, and industrial applications.",
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Bot,
      title: "Industrial Automation\n& Control",
      text: "PLC, SCADA, robotics, automation systems and industrial control.",
      img: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Settings,
      title: "Manufacturing\nEngineering",
      text: "Advanced manufacturing processes, CNC, tooling, and production systems.",
      img: mf,
    },
    {
      icon: HardHat,
      title: "Welding & Fabrication\nEngineering",
      text: "Welding technology, fabrication processes, metallurgy, and quality standards.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Landmark,
      title: "Civil & Structural\nEngineering",
      text: "Structural design, construction technology, and civil engineering practices.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: ShieldCheck,
      title: "Quality Engineering\n& Management",
      text: "Quality systems, inspections, audits, and continuous improvement.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Wrench,
      title: "Maintenance\nEngineering",
      text: "Industrial maintenance, reliability, troubleshooting, and asset management.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Leaf,
      title: "Energy & Sustainable\nEngineering",
      text: "Renewable energy, efficiency, sustainability, and green engineering solutions.",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Cpu,
      title: "CAD/CAM &\nDesign Engineering",
      text: "CAD/CAM tools, 3D modeling, simulation, and engineering design.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-10 px-5 text-[#111]">
      <div className=" mx-auto grid lg:grid-cols-[180px_1fr] gap-6">
        <aside>
          <h3 className="text-[#ed1c1c] text-[14px]  font-bold font-black uppercase mb-4">
            Browse Categories
          </h3>

          <div className="space-y-1">
            {categories.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`w-full h-[44px] px-4 flex items-center gap-3 rounded-[4px] text-left text-[12px] font-semibold transition ${
                    isActive
                      ? "bg-white shadow-sm text-[#111]"
                      : "text-[#202020] hover:bg-white/70"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.55}
                    className={isActive ? "text-[#ed1c1c]" : "text-[#111]"}
                  />
                  {item.name}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {programs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-[5px] overflow-hidden border border-[#e4e4e4] shadow-[0_3px_12px_rgba(0,0,0,.06)]"
              >
                <div className="relative h-[128px]">
                  <img
                    src={item.img}
                    alt={item.title.replace("\n", " ")}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-4 bottom-[-18px] h-[42px] w-[42px] rounded-full bg-[#071116] border-4 border-white flex items-center justify-center">
                    <Icon
                      size={19}
                      strokeWidth={1.55}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="pt-8 px-5 pb-5">
                  <h3 className="whitespace-pre-line text-[14px] font-bold leading-[1.35] font-black mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-[1.75] font-medium text-[#333] min-h-[76px]">
                    {item.text}
                  </p>

                  <button className="mt-4 text-[#ed1c1c] text-[11px] font-black flex items-center gap-3">
                    View Program <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}