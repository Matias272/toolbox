"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  label: string;
  href: string;
}

interface HeaderNavProps {
  links: NavLink[];
}

export default function HeaderNav({ links }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-8 w-8 flex-col justify-around p-1 md:hidden focus:outline-none"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <nav
        className={`fixed top-0 right-0 z-40 h-screen w-64 bg-slate-800 p-8 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent md:p-0 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-6 pt-16 md:flex-row md:gap-8 md:pt-0">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-white relative md:pb-1.5 after:content-[''] after:absolute after:bg-white after:bottom-0 after:left-0 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
