import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import iescLogo from "../images/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "CERTIFICATIONS", path: "/certifications" },
    { name: "ASSESSMENTS", path: "/assessments" },
    { name: "STANDARDS", path: "/standards" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 h-[68px] bg-[#02070c] border-b border-[#0f151a] text-white flex items-center px-4 md:px-[28px] z-50">
        <div className="w-[230px] lg:w-[290px] flex items-center">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={iescLogo}
              alt="IESC Logo"
              className="h-[48px] md:h-[52px] w-auto object-contain"
            />

            <div className="flex flex-col">
              <span className="text-white font-bold text-[22px] md:text-[28px] leading-none tracking-[2px]">
                IESC
              </span>
              <span className="hidden md:block text-[8px] lg:text-[9px] text-[#b8c2cc] tracking-[1.3px] uppercase leading-tight mt-1">
                International Engineering <br/>Standards Council
              </span>
            </div>
          </NavLink>
        </div>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-[32px] xl:gap-[42px] h-full">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative h-full flex items-center uppercase text-[10px] font-bold tracking-[1.4px] ${
                  isActive
                    ? "text-[#e41d1d]"
                    : "text-[#d0d6db] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-[18px] left-0 h-[2px] w-[34px] bg-[#e41d1d]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <Search
            size={23}
            strokeWidth={2}
            className="hidden sm:block text-white cursor-pointer hover:text-[#e41d1d] transition-colors"
          />

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white hover:text-[#e41d1d] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 z-[90] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-gradient-to-b from-[#02070c] to-[#0a1117] border-l border-[#15232b] z-[100] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={iescLogo}
              alt="IESC Logo"
              className="h-[45px] w-auto object-contain"
            />

            <div className="flex flex-col">
              <span className="text-white font-extrabold text-[24px] leading-none tracking-[2px]">
                IESC
              </span>
              <span className="text-[8px] text-[#b8c2cc] tracking-[1.1px] uppercase leading-tight mt-1">
                Engineering Standards Council
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-[#e41d1d] transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative uppercase text-[13px] font-semibold tracking-[1.6px] px-6 py-4 transition-all duration-200 ${
                  isActive
                    ? "text-[#e41d1d] bg-white/5"
                    : "text-[#d0d6db] hover:text-white hover:bg-white/5"
                }`
              }
              style={{
                animation: open
                  ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                  : "none",
                opacity: 0,
                transform: "translateX(20px)",
              }}
            >
              {({ isActive }) => (
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="w-1 h-6 bg-[#e41d1d] rounded-full" />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#02070c]/95 backdrop-blur-sm">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-[#d0d6db] hover:text-[#e41d1d] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[#d0d6db] hover:text-[#e41d1d] transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[#d0d6db] hover:text-[#e41d1d] transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}