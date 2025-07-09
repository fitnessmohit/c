import { BiLogoInstagram, BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-0 text-center text-gray-600 border-t border-[var(--coffee)] pt-8 pb-12 px-4 bg-gradient-to-br from-[var(--cream)] to-[var(--white)]">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Shekhar Rao</h3>
        <p className="text-gray-500 mb-6">Creative Visual Artist</p>

        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.instagram.com/shhekharr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-peach transition-colors duration-300 flex items-center space-x-2"
          >
            <BiLogoInstagram className="text-xl" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:shekharwork80@gmail.com"
            className="text-gray-600 hover:text-peach transition-colors duration-300 flex items-center space-x-2"
          >
            <BiEnvelope className="text-xl" />
            <span>Email</span>
          </a>
        </div>

        <div className="border-t border-[var(--coffee)] pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shekhar Rao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
