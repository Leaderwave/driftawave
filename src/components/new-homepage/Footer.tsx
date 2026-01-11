
"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with MailerLite API
    console.log("Subscribe email:", email);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-canvas-dark py-20 text-text-light">
      <div className="container mx-auto px-6">
        {/* Newsletter Popup Section */}
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">SUBSCRIBE NEWSLETTER</h3>
          <p className="text-text-light/80 mb-6">
            Stay updated with the latest team retreat trends and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-text-light placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-coral"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-coral px-8 py-3 font-bold hover:bg-brand-coral/90 transition-colors"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 border-t border-white/10 pt-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-4">Driftawave</h3>
            <p className="text-text-light/80 leading-relaxed">
              Turnkey travel experiences for remote teams, distributed companies and online communities.
            </p>
          </div>

          {/* Column 2: Legal Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Legal Company Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Terms & Conditions (B2B)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-coral transition-colors">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-coral transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-coral transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-coral transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="tel:" className="flex items-center gap-2 hover:text-brand-coral transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>Phone</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@driftawave.com" className="flex items-center gap-2 hover:text-brand-coral transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-text-light/50 text-sm">
          <p>&copy; 2025 Driftawave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
