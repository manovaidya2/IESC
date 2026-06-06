import React from "react";
import {
  Cog,
  Zap,
  Landmark,
  Factory,
  Bot,
  Boxes,
  ShieldCheck,
  UserCog,
  Hammer,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function EngineeringDisciplines() {
  const disciplines = [
    {
      icon: Cog,
      title: "Mechanical\nEngineering",
      img: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Electrical\nEngineering",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Landmark,
      title: "Civil\nEngineering",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Factory,
      title: "Industrial\nEngineering",
      img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Bot,
      title: "Robotics &\nAutomation",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Boxes,
      title: "Manufacturing\nSystems",
      img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: ShieldCheck,
      title: "Computer Science &\nEngineering",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: UserCog,
      title: "Safety\nEngineering",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Hammer,
      title: "Construction\nTechnology",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Leaf,
      title: "Energy &\nSustainability",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="engineering-disciplines"
      className="scroll-mt-20 bg-[#f7f7f7] pt-[390px] md:pt-[240px] pb-[42px]"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <p className="text-[10px] font-black uppercase tracking-[1.5px] text-[#ed1c1c]">
          ENGINEERING DISCIPLINES
        </p>

        <h2 className="mt-2 text-[22px] sm:text-[25px] md:text-[28px] font-medium text-[#111] leading-[1.25]">
          Comprehensive Coverage Across Engineering Domains
        </h2>

        <div className="mt-7 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[14px]">
          {disciplines.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative h-[155px] sm:h-[165px] overflow-hidden bg-[#061016] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title.replace("\n", " ")}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-2">
                  <Icon
                    size={40}
                    strokeWidth={1.6}
                    className="mb-3 text-white"
                  />

                  <h3 className="whitespace-pre-line text-center text-[14px] font-bold leading-[1.3] text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-8 inline-flex items-center justify-center gap-3 border border-[#ed1c1c] bg-white px-7 py-3 text-[10px] font-black uppercase tracking-[1px] text-[#ed1c1c] hover:bg-[#ed1c1c] hover:text-white transition">
          Explore All Disciplines
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
