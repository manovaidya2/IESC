import React from "react";
import { UserRound, HardHat, Crown, ShieldCheck, Briefcase, CheckCircle } from "lucide-react";

export default function MembershipLevelSection() {
  const cards = [
    {
      icon: UserRound,
      title: "Associate\nEngineer",
      desc: "For engineering graduates and early-career professionals.",
      points: ["Recognition", "Learning Access", "Community"],
    },
    {
      icon: HardHat,
      title: "Professional\nEngineer",
      desc: "For experienced engineers with proven technical competence.",
      points: ["Professional Credibility", "Industry Recognition", "Career Growth"],
    },
    {
      icon: Crown,
      title: "Fellow\nEngineer",
      desc: "For senior professionals with significant achievements & leadership.",
      points: ["Senior Recognition", "Global Visibility", "Thought Leadership"],
      active: true,
    },
    {
      icon: ShieldCheck,
      title: "Chartered\nEngineer",
      desc: "For experts demonstrating exceptional competence and responsibility.",
      points: ["Chartered Status", "Authority & Trust", "Global Mobility"],
    },
    {
      icon: Briefcase,
      title: "Executive Engineering\nMember",
      desc: "For leaders driving innovation, strategy and industrial transformation.",
      points: ["Executive Network", "Strategic Influence", "Board Level Recognition"],
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-10 px-4 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center mb-5">
          <div className="mx-auto mb-1 h-[3px] w-[42px] bg-[#ff2a2a]" />
          <h2 className="text-[22px] sm:text-[24px] font-black text-[#111] mt-3 mb-5">
            Choose Your Membership Level
          </h2>
          <div className="mx-auto mt-1 h-[3px] w-[42px] bg-[#ff2a2a]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`relative min-h-[315px] rounded-[3px] px-5 py-5 sm:px-7 sm:py-6 text-center shadow-[0_4px_18px_rgba(0,0,0,.12)] border overflow-hidden ${
                  card.active
                    ? "bg-[#061015] text-white border-[#061015] scale-[1.02]"
                    : "bg-white text-[#111] border-[#eeeeee]"
                }`}
              >
                {card.active && (
                  <div className="absolute right-[-34px] top-[15px] font-semibold rotate-45 bg-[#ff1f1f] text-white text-[9px] font-black uppercase px-9 py-1">
                    Most Popular
                  </div>
                )}

                {card.active && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,.12),transparent_22%)]" />
                )}

                <div className="relative z-10">
                  <div
                    className={`mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full ${
                      card.active ? "bg-white/10" : "bg-[#f2f2f2]"
                    }`}
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.45}
                      className={card.active ? "text-white" : "text-[#111]"}
                    />
                  </div>

                  <h3 className="whitespace-pre-line text-[18px] leading-[1.15] font-black mb-3">
                    {card.title}
                  </h3>

                  <div className="mx-auto mb-5 h-[3px] w-[38px] bg-[#ff2a2a]" />

                  <p
                    className={`text-[11px] leading-[1.6] font-semibold min-h-[54px] mb-5 ${
                      card.active ? "text-white/85" : "text-[#333]"
                    }`}
                  >
                    {card.desc}
                  </p>

                  <div className="space-y-2 text-left mb-7">
                    {card.points.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#ff2a2a] shrink-0" />
                        <span
                          className={`text-[11px] font-semibold ${
                            card.active ? "text-white/90" : "text-[#222]"
                          }`}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`text-[11px] font-black uppercase ${
                      card.active
                        ? "h-[36px] px-5 bg-[#ff1f1f] text-white"
                        : "text-[#ff1f1f]"
                    }`}
                  >
                    View Details →
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