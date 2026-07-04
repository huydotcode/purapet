"use client";
import { navLinks, sections } from "@/constants/nav-link";
import { useScroll } from "@/hooks/useScroll";
import { useScrollspy } from "@/hooks/useScrollSpy";
import Image from "next/image";
import { useState } from "react";

const SECTION_IDS = sections.map((s) => s.id);

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isScrolled = useScroll(20);
  const activeSection = useScrollspy(SECTION_IDS);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-100 transition-all duration-400 ease-[cubic-bezier(0.3,1,0.5,1)]
        bg-bg-primary/95 backdrop-blur-[20px] border border-border-custom shadow-sm
        ${isScrolled ? "top-0 w-full max-w-full h-15 rounded-none border-t-0 border-x-0" : "top-4 w-[92%] max-w-300 h-16 rounded-full"}`}
    >
      <div
        className={`h-full flex items-center justify-between w-full transition-all duration-400 ease-[cubic-bezier(0.3,1,0.5,1)]
          ${isScrolled ? "px-6" : "px-9"}`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-[1.35rem] font-display text-text-primary">
          <Image
            src="/logo.png"
            alt="PuraPet Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain rounded-lg transition-transform duration-200 hover:scale-[1.03]"
          />
          <span className="text-accent-coral">PuraPet</span>
        </a>

        {/* Navigation Links */}
        <nav
          className={`
            transition-all duration-400 ease-out z-99
            fixed left-[4%] right-[4%] bg-bg-primary/95 backdrop-blur-xl border border-border-custom rounded-2xl p-8 shadow-lg
            ${
              isMobileOpen
                ? "translate-y-0 scale-100 opacity-100 visible"
                : "-translate-y-3.75 scale-[0.98] opacity-0 invisible pointer-events-none"
            }
            ${isScrolled ? "top-17" : "top-22"}
            lg:static lg:block lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0 lg:shadow-none lg:translate-y-0 lg:scale-100 lg:opacity-100 lg:visible lg:pointer-events-auto
          `}
        >
          <ul className="flex flex-col lg:flex-row list-none gap-3 lg:gap-1 xl:gap-3 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href} className="w-full lg:w-auto">
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-display whitespace-nowrap font-bold text-[0.92rem] block text-center py-2.5 lg:py-1.5 px-4 rounded-full transition-all duration-200
                      ${
                        isActive
                          ? "text-accent-sage bg-accent-sage-light"
                          : "text-text-muted hover:text-accent-coral hover:bg-accent-coral-light"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* HEADER ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <a
            href="#nhan-tin"
            className="hidden lg:inline-flex items-center justify-center gap-2.5 px-4.5 py-2 font-display font-bold text-[0.85rem] rounded-full bg-accent-coral text-white shadow-[0_8px_24px_var(--accent-coral-light)] transition-all duration-200 hover:bg-accent-coral-hover hover:-translate-y-0.5 hover:shadow-(--glow-coral) whitespace-nowrap"
          >
            Đặt Trước Ngay
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="block lg:hidden bg-transparent border-none cursor-pointer p-2 z-101"
            aria-label={isMobileOpen ? "Đóng menu" : "Mở menu"}
          >
            <div className="w-5.5 h-3.5 relative flex flex-col justify-between">
              {" "}
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-all duration-400 origin-top-left
                  ${isMobileOpen ? "translate-x-0.75 -translate-y-px rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-all duration-400
                  ${isMobileOpen ? "opacity-0 -translate-x-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-all duration-400 origin-bottom-left
                  ${isMobileOpen ? "translate-x-0.75 translate-y-px -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
