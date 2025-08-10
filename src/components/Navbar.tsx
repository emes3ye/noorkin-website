"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-primary/5 via-white to-secondary/5 backdrop-blur-sm border-b border-primary/20">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="font-serif text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Noorkin.dev
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-charcoal hover:text-primary transition-all duration-300 font-medium group px-2 py-1"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/services"
              className="relative text-charcoal hover:text-primary transition-all duration-300 font-medium group px-2 py-1"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="relative text-charcoal hover:text-primary transition-all duration-300 font-medium group px-2 py-1"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/blog"
              className="relative text-charcoal hover:text-primary transition-all duration-300 font-medium group px-2 py-1"
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="relative text-charcoal hover:text-secondary transition-all duration-300 font-medium group px-3 py-2 border border-transparent hover:border-secondary/30 rounded-md bg-gradient-to-r from-secondary/5 to-primary/5"
            >
              <span className="relative z-10">Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-primary hover:bg-gradient-to-br from-primary/10 to-secondary/10 focus-ring transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary/20 bg-gradient-to-b from-white to-primary/5">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary hover:bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary hover:bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary hover:bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-charcoal hover:text-primary hover:bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
