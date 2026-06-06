import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import partnerBg from "../images/whatimg.png";

export default function ContactFormMapSection() {
  return (
    <section
      id="contact-message"
      className="scroll-mt-20 bg-[#f8f8f7] px-5 lg:px-10 py-[34px] text-[#111]"
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-6">
        
        {/* Left Form */}
        <div className="bg-white rounded-[6px] border border-[#e5e5e5] shadow-[0_4px_18px_rgba(0,0,0,.06)] px-6 py-6">
          <h2 className="text-[18px] font-bold font-black mb-2">
            Send Us a Message
          </h2>

          <div className="w-[28px] h-[2px] bg-[#ff1f1f] mb-5" />

          <p className="text-[11px] font-semibold text-[#333] mb-5">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold  font-black mb-2">
                  Full Name <span className="text-[#ff1f1f]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-[38px] w-full rounded-[3px] border border-[#dddddd] px-3 text-[11px] outline-none focus:border-[#ff1f1f]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold font-black mb-2">
                  Email Address <span className="text-[#ff1f1f]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[38px] w-full rounded-[3px] border border-[#dddddd] px-3 text-[11px] outline-none focus:border-[#ff1f1f]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold  font-black mb-2">
                Subject <span className="text-[#ff1f1f]">*</span>
              </label>
              <select className="h-[40px] w-full rounded-[3px] border border-[#dddddd] px-3 text-[11px] text-[#777] outline-none focus:border-[#ff1f1f]">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Membership Support</option>
                <option>Certification Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold  font-black mb-2">
                Message <span className="text-[#ff1f1f]">*</span>
              </label>
              <textarea
                placeholder="How can we help you?"
                className="h-[115px] w-full resize-none rounded-[3px] border border-[#dddddd] p-3 text-[11px] outline-none focus:border-[#ff1f1f]"
              />
            </div>

            <label className="flex items-center gap-2 text-[10px] font-semibold text-[#333]">
              <input type="checkbox" className="h-3 w-3" />
              I agree to the{" "}
              <span className="text-[#ff1f1f] underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-[#ff1f1f] underline">
                Terms & Conditions
              </span>
            </label>

            <button className="h-[44px] px-6 bg-[#ff1f1f] text-white text-[12px] font-black rounded-[3px] flex items-center gap-4">
              Send Message
              <ArrowRight size={15} />
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="grid gap-6">
          
          {/* Map */}
          <div className="relative min-h-[265px] rounded-[6px] overflow-hidden border border-[#e5e5e5] shadow-[0_4px_18px_rgba(0,0,0,.06)] bg-[#dbeaf1]">
            <iframe
              title="IESC Headquarters Map"
              src="https://www.google.com/maps?q=One%20World%20Trade%20Center%20New%20York&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
            />

            <div className="absolute top-[58px] left-1/2 -translate-x-1/2 w-[210px] rounded-[4px] bg-white px-4 py-4 shadow-[0_5px_20px_rgba(0,0,0,.16)]">
              <h3 className="text-[12px] font-bold font-black mb-2">
                IESC Headquarters
              </h3>

              <p className="text-[10px] leading-[1.45] font-semibold text-[#333] mb-3">
                One World Trade Center, Suite 8500 <br />
                New York, NY 10007, USA
              </p>

              <button className="text-[#ff1f1f] text-[10px] font-black flex items-center gap-2">
                Get Directions
                <ArrowRight size={12} />
              </button>
            </div>

            <div className="absolute left-[44%] top-[42%] text-[#ff1f1f]">
              <MapPin size={26} fill="#ff1f1f" />
            </div>
          </div>

          {/* Partner Banner */}
          <div
            className="relative min-h-[126px] rounded-[6px] overflow-hidden bg-cover bg-center text-white border border-[#111]"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(1,8,13,.98) 0%,
                  rgba(1,8,13,.86) 48%,
                  rgba(1,8,13,.35) 100%
                ),
                url(${partnerBg})
              `,
            }}
          >
            <div className="relative z-10 px-7 py-6 max-w-[430px]">
              <h2 className="text-[18px] font-bold font-black mb-3">
                Partner With IESC
              </h2>

              <p className="text-[11px] leading-[1.55] font-semibold text-white/85 mb-4">
                We collaborate with organizations, institutions, and industry
                leaders to advance engineering excellence worldwide.
              </p>

              <button className="h-[34px] px-4 bg-[#ff1f1f] text-white text-[11px] font-bold font-black rounded-[3px] flex items-center gap-3">
                Explore Partnerships
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
