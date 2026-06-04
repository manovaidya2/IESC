import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Globe2,
  ArrowRight,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

export default function GetInTouchSection() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Headquarters",
      lines: ["One World Trade Center, Suite 8500", "New York, NY 10007, USA"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["info@iesc.org", "support@iesc.org"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+1 (212) 123-4567", "Mon - Fri: 9:00 AM - 6:00 PM EST"],
    },
    {
      icon: Globe2,
      title: "Global Offices",
      lines: ["Find our regional offices", "around the world."],
      link: "View Locations",
    },
  ];

  const socials = [
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
    FaFacebookF,
    FaInstagram,
  ];

  return (
    <section className="bg-[#f8f8f7] text-[#111] px-5 lg:px-10 py-[34px]">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-7">
          <h2 className="text-[30px] font-bold md:text-[34px] leading-[1.15] font-black">
            Get in <span className="text-[#ff1f1f]">Touch</span>
          </h2>

          <p className="mt-2 text-[14px] font-semibold text-[#222]">
            Multiple ways to connect with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_1.25fr] gap-5">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="min-h-[198px] rounded-[8px] bg-white border border-[#e5e5e5] shadow-[0_5px_18px_rgba(0,0,0,.08)] px-6 py-7"
              >
                <div className="h-[44px] w-[44px] rounded-full bg-[#04172b] flex items-center justify-center mb-4">
                  <Icon
                    size={25}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </div>

                <h3 className="text-[18px] font-bold leading-none font-black mb-4">
                  {card.title}
                </h3>

                <div className="space-y-2 mb-6">
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[12px] leading-[1.35] font-semibold text-[#111]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {card.link ? (
                  <button className="mt-1 text-[#ff1f1f] text-[12px] font-black flex items-center gap-4">
                    {card.link}
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <div className="mt-7 h-[2px] w-[32px] bg-[#ff1f1f]" />
                )}
              </div>
            );
          })}

          <div className="min-h-[198px] rounded-[8px] bg-[#020b10] text-white shadow-[0_8px_24px_rgba(0,0,0,.18)] px-7 py-8">
            <h3 className="text-[20px] font-bold font-black mb-4">
              Connect With Us
            </h3>

            <p className="text-[13px] leading-[1.7] font-semibold text-white/85 max-w-[290px] mb-8">
              Follow us for the latest updates, news, and industry insights.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((Icon, index) => (
                <button
                  key={index}
                  className="h-[38px] w-[38px] rounded-full border border-white/45 flex items-center justify-center text-white hover:bg-[#ff1f1f] hover:border-[#ff1f1f] transition-all"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}