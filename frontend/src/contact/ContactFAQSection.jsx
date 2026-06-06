import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Mail,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: HelpCircle,
      question: "How soon will the IESC team respond?",
      answer:
        "Most inquiries are reviewed within 1-2 business days by the relevant support team.",
    },
    {
      icon: UsersRound,
      question: "Can I contact IESC for partnerships?",
      answer:
        "Yes. Select Partnership in the contact form and include your organization details.",
    },
    {
      icon: ShieldCheck,
      question: "Where can I ask about certifications or membership?",
      answer:
        "Use the message form and choose the matching subject so your request reaches the right team.",
    },
    {
      icon: Mail,
      question: "Can I email IESC directly?",
      answer:
        "You can reach the team at info@iesc.org for general inquiries and support.",
    },
  ];

  return (
    <section
      id="contact-faqs"
      className="scroll-mt-20 bg-white px-5 lg:px-10 py-[38px] text-[#111]"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-7">
          <p className="text-[#ff1f1f] text-[12px] font-black uppercase mb-3">
            FAQs
          </p>

          <h2 className="text-[28px] md:text-[34px] font-black leading-[1.15]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-[6px] border border-[#e5e5e5] bg-[#f8f8f7] shadow-[0_3px_14px_rgba(0,0,0,.04)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#ff1f1f] text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[15px] font-black">
                      {item.question}
                    </h3>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-[#ff1f1f] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[83px] text-[13px] leading-[1.65] font-semibold text-[#333]">
                      {item.answer}
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
