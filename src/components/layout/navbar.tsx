"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/src/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="container-custom flex items-center justify-between py-5">
        <Link
          href="/"
          className="relative text-sm font-large text-gray-700 transition-all duration-300 hover:text-green-800"
        >
          Ayurveda Tantran
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/appointments">
            <Button>
              Appointment
            </Button>
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="container-custom flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/appointments">
              <Button>
                Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}