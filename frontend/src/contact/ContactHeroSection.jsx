import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Headphones,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import contactHero from "../images/contacts.png";

export default function ContactHeroSection() {
  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const supportItems = [
    "General Inquiries",
    "Membership & Certification Support",
    "Standards & Technical Information",
    "Partnerships & Collaborations",
    "Press & Media Inquiries",
  ];

  return (
    <section
      className="relative min-h-[520px] overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(1,8,13,.98) 0%,
            rgba(1,8,13,.88) 34%,
            rgba(1,8,13,.45) 62%,
            rgba(1,8,13,.12) 100%
          ),
          url(${contactHero})
        `,
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10  mx-auto px-5 lg:px-10 py-[35px] lg:py-[65px]">
        <div className="grid lg:grid-cols-[620px_390px] justify-between gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-2 text-[12px] font-semibold text-white/80 mb-7">
              <span>Home</span>
              <ChevronRight size={14} />
              <span>Contact</span>
            </div>

            <h1 className="text-[42px] sm:text-[50px] md:text-[48px] font-bold leading-[1.05] font-black mb-5">
              Let’s Build a <br />
              Stronger Engineering <br />
              Future{" "}
              <span className="text-[#ff1f1f]">
                Together.
              </span>
            </h1>

            <div className="w-[70px] h-[4px] bg-[#ff1f1f] mb-5" />

            <p className="max-w-[560px] text-[16px] md:text-[18px] leading-[1.4] font-semibold text-white/85 mb-8">
              Have questions, feedback, or partnership opportunities?
              We’re here to help. Reach out to our team and we’ll get
              back to you as soon as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("contact-message")}
                className="h-[42px] px-5 bg-[#ff1f1f] border border-[#ff1f1f] font-bold text-white text-[14px] font-black rounded-[4px] flex items-center justify-center gap-5"
              >
                Send Us a Message
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact-faqs")}
                className="h-[42px] px-7 bg-black/15 backdrop-blur-sm border border-white/30 font-bold text-white text-[14px] font-black rounded-[4px] flex items-center justify-center gap-4"
              >
                Explore FAQs
                <HelpCircle size={17} />
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#020b10]/82 backdrop-blur-md border border-white/10 rounded-[12px] p-3 lg:p-5 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[64px] w-[154px] rounded-full border border-white/15 flex items-center justify-center">
                <Headphones
                  size={34}
                  strokeWidth={1.7}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-[22px] font-bold font-black text-[#ff1f1f] mb-2">
                  We're Here to Help
                </h3>

                <p className="text-[15px] leading-[1.5] font-semibold text-white/80">
                  Our team is dedicated to supporting engineers,
                  organizations, and industry professionals worldwide.
                </p>
              </div>
            </div>

            <div className="space-y-5 mt-5">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#ff1f1f] shrink-0"
                  />

                  <span className="text-[15px] font-semibold text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
