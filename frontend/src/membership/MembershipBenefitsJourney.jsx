import React from "react";
import {
  UserRound,
  TrendingUp,
  BriefcaseBusiness,
  Network,
  BookOpenCheck,
  BadgeCheck,
  FilePenLine,
  FileSearch,
  UserCheck,
  Award,
  Globe2,
  Quote,
} from "lucide-react";

export default function MembershipBenefitsJourney() {
  const benefits = [
    {
      icon: UserRound,
      title: "Global Recognition",
      text: "Internationally recognised membership that validates your engineering expertise.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      text: "Access to advanced learning, resources and continuous development.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Advancement",
      text: "Enhance employability, promotions and salary potential.",
    },
    {
      icon: Network,
      title: "Industry Network",
      text: "Connect with professionals, experts and industry leaders worldwide.",
    },
    {
      icon: BookOpenCheck,
      title: "Exclusive Resources",
      text: "Technical standards, research papers, webinars and industry reports.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Profile",
      text: "Your profile listed in the Global Engineering Registry.",
    },
  ];

  const journey = [
    {
      icon: FilePenLine,
      no: "01",
      title: "Apply Online",
      text: "Submit your application with documentation.",
    },
    {
      icon: FileSearch,
      no: "02",
      title: "Eligibility Review",
      text: "Our team verifies your qualifications & experience.",
    },
    {
      icon: UserCheck,
      no: "03",
      title: "Assessment (if applicable)",
      text: "Technical review or assessment based on level.",
    },
    {
      icon: Award,
      no: "04",
      title: "Approval & Induction",
      text: "Receive membership ID and welcome to IESC.",
    },
    {
      icon: Globe2,
      no: "05",
      title: "Benefits & Recognition",
      text: "Access benefits and showcase your credentials.",
    },
  ];

  const logos = [
    "SIEMENS",
    "SAP",
    "BMW\nGROUP",
    "BOSCH",
    "RENK",
    "EDAG",
    "ABB",
    "AIRBUS",
    "IABG",
    "thyssenkrupp",
    "Porsche",
    "TATA\nMOTORS",
  ];

  return (
    <>
      {/* BENEFITS SECTION */}
      <section className="bg-white text-[#111]">
        <div className=" mx-auto px-5 lg:px-10 pt-7 pb-4">

          {/* Heading */}
          <div className="text-center mb-7">
            <h2 className="text-[26px] md:text-[30px] font-black">
              Why Become an{" "}
              <span className="relative inline-block">
                IESC
                <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-[38px] bg-[#ff1f1f]" />
              </span>{" "}
              Member?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-y border-[#eeeeee] py-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`px-5 py-7 text-center ${
                    index !== benefits.length - 1
                      ? "lg:border-r border-[#dddddd]"
                      : ""
                  }`}
                >
                  <Icon
                    size={36}
                    strokeWidth={1.5}
                    className="mx-auto text-[#ff2a2a] mb-4"
                  />

                  <h3 className="text-[15px] font-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-[1.7] font-medium text-[#333] mx-auto max-w-[165px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="bg-[#f8f8f7] text-[#111] py-12">
        <div className=" mx-auto px-5 lg:px-10">

          <h2 className="text-center text-[28px] font-black mb-10">
            The Membership Journey
          </h2>

          <div className="relative">

            {/* Desktop Line */}
            <div className="hidden lg:block absolute left-[4%] right-[4%] top-[42px] h-[2px] bg-[#dcdcdc]" />

            <div className="hidden lg:block absolute left-[4%] top-[38px] h-[9px] w-[9px] rounded-full bg-[#ff1f1f]" />

            <div className="hidden lg:block absolute right-[4%] top-[38px] h-[9px] w-[9px] rounded-full bg-[#ff1f1f]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {journey.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.no}
                    className="text-center px-3"
                  >
                    <div className="mx-auto h-[76px] w-[76px] rounded-full bg-white border border-[#d8d8d8] shadow-[0_4px_15px_rgba(0,0,0,.12)] flex items-center justify-center mb-3">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="text-[#123047]"
                      />
                    </div>

                    <p className="text-[#ff1f1f] text-[12px] font-black mb-2">
                      {item.no}
                    </p>

                    <h3 className="text-[15px] leading-tight font-black mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[11px] leading-[1.6] font-medium text-[#333] max-w-[155px] mx-auto">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="bg-[#020b10] text-white">
        <div className="max-w-[1380px] mx-auto grid lg:grid-cols-[1.1fr_1fr_1.1fr] min-h-[290px]">

          {/* Testimonial */}
          <div className="px-10 py-10 flex flex-col justify-center">
            <Quote
              size={30}
              fill="#ff1f1f"
              className="text-[#ff1f1f] mb-6"
            />

            <p className="text-[15px] leading-[1.75] max-w-[360px] mb-8 text-white/95">
              IESC membership gave me the global recognition and confidence to
              lead complex engineering projects at a higher level.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-[52px] w-[52px] rounded-full bg-[#d8d8d8]" />

              <div>
                <h4 className="text-[14px] font-black">
                  Arjun Mehta
                </h4>

                <p className="text-[11px] text-white/75">
                  Chartered Engineer (IESC)
                </p>
              </div>
            </div>
          </div>

          {/* Company Logos */}
          <div className="px-7 py-9 flex flex-col justify-center">
            <h3 className="text-center text-[14px] font-black mb-6">
              IESC Members Work At
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="min-h-[48px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-center whitespace-pre-line text-[11px] leading-[1.1] font-black text-white/75 px-2"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative min-h-[290px] bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(2,11,16,.35),
                  rgba(2,11,16,.08)
                ),
                url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop')
              `,
            }}
          />
        </div>
      </section>
    </>
  );
}