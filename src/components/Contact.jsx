"use client";

import { useState } from "react";
import {
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiPhoneCall,
  BiMailSend,
} from "react-icons/bi";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
        Connect on
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.instagram.com/shhekharr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiLogoInstagram className="w-5 h-5 text-gray-700" />
        </a>
        <a
          href="mailto:shekharwork80@gmail.com"
          className="p-3 rounded-full bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiMailSend className="w-5 h-5 text-gray-700" />
        </a>
        <a
          href="https://wa.me/919058968080"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiLogoWhatsapp className="w-5 h-5 text-gray-700" />
        </a>
        <a
          href="tel:+919058968080"
          className="p-3 rounded-full bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiPhoneCall className="w-5 h-5 text-gray-700" />
        </a>
      </div>

      <div className="border-t border-[var(--coffee)] my-6"></div>
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Reach Out
      </h2>

      {!submitted ? (
        <form
          action="https://formsubmit.co/shekharwork80@gmail.com"
          method="POST"
          className="space-y-4"
          onSubmit={() => setSubmitted(true)}
        >
          {/* Disable CAPTCHA and set redirect */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://sakhar.vercel.app/#contact"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 bg-[var(--skin)] rounded-lg border-0 focus:bg-white focus:ring-2 focus:ring-[var(--peach)] focus:outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-[var(--skin)] rounded-lg border-0 focus:bg-white focus:ring-2 focus:ring-[var(--peach)] focus:outline-none transition-all"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-4 bg-[var(--skin)] rounded-lg border-0 focus:bg-white focus:ring-2 focus:ring-[var(--peach)] focus:outline-none transition-all resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[var(--peach)] text-white py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-[var(--peach)] font-semibold">
            Message sent successfully!
          </p>
        </div>
      )}
    </>
  );
};

export default Contact;
