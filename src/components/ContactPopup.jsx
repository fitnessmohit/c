"use client";

import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import Contact from "@/components/Contact";

export default function ContactPopup({ onClose }) {
  const popupRef = useRef(null);

  // Lock scroll on mount
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Close popup on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[99] bg-black/50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact popup"
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg max-w-xl w-full p-6 relative shadow-xl animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
          aria-label="Close contact popup"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Contact Form Component */}
        <Contact />
      </div>
    </div>
  );
}
