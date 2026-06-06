import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import iescLogo from "../images/logo.png";

export default function Footer() {
  const quickLinks = [
    { label: "About IESC", path: "/about" },
    { label: "Membership", path: "/membership" },
    { label: "Certifications", path: "/certifications" },
    { label: "Assessments", path: "/assessments" },
    { label: "Standards", path: "/standards" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
  ];

  const programs = [
    { label: "Engineering Memberships", path: "/membership" },
    { label: "Certification Programs", path: "/certifications" },
    { label: "Industrial Assessments", path: "/assessments" },
    { label: "Practical Assessments", path: "/assessments" },
    { label: "LMS Portal", path: "/resources" },
  ];

  const resources = [
    { label: "Engineering Standards", path: "/standards" },
    { label: "Technical Articles", path: "/resources" },
    { label: "Guidelines & Frameworks", path: "/resources" },
    { label: "Research & Innovation", path: "/resources" },
    { label: "News & Updates", path: "/resources" },
  ];

  return (
    <footer className="relative bg-[#020b10] text-white overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(18,60,75,.35),transparent_32%),linear-gradient(90deg,rgba(0,0,0,.25),transparent)]" />

      <div className="relative z-10 mx-auto px-5 lg:px-8 pt-6 pb-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1fr_280px] gap-8 lg:gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src={iescLogo}
                alt="IESC Logo"
                className="h-[62px] w-auto object-contain"
              />

              <div>
                <h2 className="text-[30px] leading-none font-extrabold tracking-[2px]">
                  IESC
                </h2>

                <p className="mt-1 text-[10px] leading-[1.25] font-semibold uppercase tracking-[1.3px] text-[#d7dde0]">
                  International Engineering
                  <br />
                  Standards Council
                </p>
              </div>
            </div>

            <p className="text-[13px] leading-[1.7] text-[#d5dbde] max-w-[260px] font-medium mb-6">
              Building a global community of engineering
              professionals through standards,
              competency, certification, and trust.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FaLinkedinIn, FaYoutube, FaXTwitter].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="h-[40px] w-[40px] rounded-full border border-white/25 flex items-center justify-center hover:bg-[#ed1c1c] hover:border-[#ed1c1c] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </button>
                )
              )}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={quickLinks}
          />

          <FooterCol
            title="Programs"
            items={programs}
          />

          <FooterCol
            title="Resources"
            items={resources}
          />

          {/* Contact */}
          <div className="lg:border-l border-white/15 lg:pl-7">
            <h3 className="text-[12px] font-black uppercase tracking-[1px] mb-5">
              Contact Us
            </h3>

            <p className="text-[12px] leading-[1.7] text-[#d8dee1] font-semibold mb-5">
              International Engineering Standards Council
              Headquarters
              <br />
              Dubai, United Arab Emirates
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-[12px] text-[#d8dee1]">
                <Mail
                  size={15}
                  className="text-[#ed1c1c]"
                />
                info@iesc.org
              </div>

              <div className="flex items-center gap-3 text-[12px] text-[#d8dee1]">
                <Phone
                  size={15}
                  className="text-white"
                />
                +971 4 123 4567
              </div>
            </div>

            <Link
              to="/contact"
              className="text-[#ed1c1c] text-[13px] font-black uppercase flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-white/15 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#cfd5d8] text-center md:text-left">
            © 2026 International Engineering Standards
            Council. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-[12px] text-[#cfd5d8]">
            <Link
              to="/resources"
              className="hover:text-[#ed1c1c] cursor-pointer transition"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <Link
              to="/resources"
              className="hover:text-[#ed1c1c] cursor-pointer transition"
            >
              Terms & Conditions
            </Link>

            <span>|</span>

            <Link
              to="/resources"
              className="hover:text-[#ed1c1c] cursor-pointer transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="lg:border-l border-white/15 lg:pl-7">
      <h3 className="text-[12px] font-black uppercase tracking-[1px] mb-5">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="text-[12px] text-[#d8dee1] font-semibold hover:text-[#ed1c1c] cursor-pointer transition-all duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
