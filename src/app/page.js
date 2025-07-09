"use client";

import HeroSection from "@/components/HeroSection";
import DigitalsSection from "@/components/DigitalsSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="bg-cream text-black relative">
      <HeroSection />
      <DigitalsSection />
      <Footer />

      {/* Floating Contact Button */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--peach)] hover:bg-opacity-90 text-white font-bold py-3 px-5 rounded-full shadow-lg transition"
      >
        Let's talk
      </button>

      {/* Contact Popup Component */}
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </main>
  );
}
