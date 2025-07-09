"use client";

import Contact from "@/components/Contact";

export default function ContactPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-black"
          aria-label="Close contact popup"
        >
          &times;
        </button>

        {/* Contact Form Component */}
        <Contact />
      </div>
    </div>
  );
}
