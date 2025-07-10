// src/components/Footer.jsx
import { BiLogoInstagram, BiEnvelope } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-center text-gray-600 border-t border-[var(--coffee)] pt-8 pb-12 px-4 bg-gradient-to-br from-[var(--cream)] to-[var(--white)]"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Name and Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Shekhar Rao</h3>
        <p className="text-gray-500 mb-6 text-lg tracking-wide text-center">
          <a
            href="mailto:shekharwork80@gmail.com"
            className="hover:underline hover:text-peach transition-colors"
          >
            shekharwork80@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <nav
          className="flex justify-center space-x-8 mb-6"
          aria-label="Footer social links"
        >
          <a
            href="https://www.instagram.com/shhekharr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-peach transition-colors duration-300 flex items-center gap-2 group"
            aria-label="Visit Shekhar Rao's Instagram"
          >
            <BiLogoInstagram className="text-xl" aria-hidden="true" />
            <span className="text-sm group-hover:underline">Instagram</span>
          </a>

          <a
            href="mailto:shekharwork80@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-peach transition-colors duration-300 flex items-center gap-2 group"
            aria-label="Send an email to Shekhar Rao"
          >
            <BiEnvelope className="text-xl" aria-hidden="true" />
            <span className="text-sm group-hover:underline">Email</span>
          </a>
        </nav>

        {/* Bottom copyright */}
        <div className="border-t border-[var(--coffee)] pt-6">
          <p className="text-sm text-gray-400">
            © {year} Shekhar Rao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
