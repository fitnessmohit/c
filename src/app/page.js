"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import DigitalsSection from "@/components/DigitalsSection";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main
      role="main"
      className="bg-cream text-black relative overflow-x-hidden"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Digitals */}
      <DigitalsSection />

      {/* Footer */}
      <Footer />

      {/* Floating 'Let's Talk' Button */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 z-50 bg-peach hover:bg-opacity-90 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peach"
        aria-label="Open Contact Form"
      >
        {`Let's talk`}
      </button>

      {/* Contact Modal */}
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </main>
  );
}
