"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setMessage("");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 relative">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 bg-pattern-overlay pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-charcoal">
              Noorkin.dev
            </h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Illuminating your business with ethical tech solutions. 
              We build software with integrity, excellence, and respect.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-charcoal">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/services" 
                className="text-sm text-charcoal/70 hover:text-primary transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-charcoal/70 hover:text-primary transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-sm text-charcoal/70 hover:text-primary transition-colors duration-200"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-charcoal/70 hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-medium text-charcoal">Stay Updated</h3>
            <p className="text-sm text-charcoal/70">
              Get occasional insights and updates. No spam, we promise.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 disabled:bg-primary/60 rounded-md transition-colors duration-200 focus-ring"
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <p className="text-xs text-charcoal/70">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal/60">
            © {new Date().getFullYear()} Noorkin.dev. All rights reserved.
          </p>
          <p className="text-sm text-charcoal/60">
            Crafted with <span className="text-accent font-medium">care</span> and integrity.
          </p>
        </div>
      </div>
    </footer>
  );
}
