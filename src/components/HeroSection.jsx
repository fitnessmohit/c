"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTab, setCurrentTab] = useState("Digitals");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ["Digitals", "Video", "Instagram"];
  const measurements = [
    { label: "HEIGHT", value: "180 CM" },
    { label: "CHEST", value: "38" },
    { label: "WAIST", value: "30" },
    { label: "HIPS", value: "37" },
    { label: "SHOE", value: "UK 09" },
    { label: "EYES", value: "BLACK" },
    { label: "HAIR", value: "BLACK" },
  ];

  useEffect(() => {
    const video = document.getElementById("background-video");
    if (video) {
      video.play().catch(() => {});
    }
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);

    if (tab === "Digitals") {
      const el = document.getElementById("digitals");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    if (tab === "Video") {
      window.open(
        "https://wa.me/919058968080?text=Send%20your%20videos",
        "_blank"
      );
    }

    if (tab === "Instagram") {
      window.open("https://www.instagram.com/shhekharr", "_blank");
    }

    setMenuOpen(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        id="background-video"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/runway.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 z-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-5"></div>

      {/* Menu Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-5 right-5 z-30 sm:top-6 sm:right-6"
        aria-label="Menu"
      >
        <svg
          className="transition-transform duration-200"
          viewBox="0 0 40 30"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "40px",
            height: "30px",
            cursor: "pointer",
            transform: menuOpen ? "scaleX(-1) scale(1.1)" : "scaleX(-1)",
          }}
        >
          <g>
            <rect
              x="0"
              y="0"
              width="30"
              height="4"
              rx="2"
              style={{
                fill: "var(--cream)",
                transformOrigin: "center",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: menuOpen
                  ? "rotate(50deg) translate(8px, 7px)"
                  : "none",
              }}
            />
            <rect
              x="0"
              y="13"
              width="35"
              height="4"
              rx="2"
              style={{
                fill: "var(--peach)",
                transformOrigin: "center",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
            <rect
              x="0"
              y="26"
              width="25"
              height="4"
              rx="2"
              style={{
                fill: "var(--cream)",
                transformOrigin: "center",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: menuOpen
                  ? "rotate(-50deg) translate(12px, -8px)"
                  : "none",
              }}
            />
          </g>
        </svg>
      </button>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-20 flex flex-col items-center justify-center space-y-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className="text-2xl md:text-4xl tracking-widest uppercase transition hover:scale-105"
              style={{ color: "var(--cream)" }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Name */}
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1
            className="text-4xl md:text-7xl font-serif font-light mb-2 tracking-wide"
            style={{ color: "var(--cream)" }}
          >
            Shekhar
          </h1>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
            <span className="text-lg md:text-xl font-light text-white/80 tracking-[0.3em]">
              RAO
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
          <p className="text-sm md:text-base text-white/60 font-light tracking-widest">
            DELHI
          </p>
        </div>

        {/* Measurements */}
        <div
          className={`mt-10 transition-all duration-1000 delay-300 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90">
            {measurements.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-xs font-medium tracking-wider text-white/60 mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-light group-hover:text-white transition-colors duration-300">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          className={`mt-12 sm:mt-16 mb-8 sm:mb-20 transition-all duration-1000 delay-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 max-w-[90%] mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative group px-4 py-2 text-sm uppercase font-medium tracking-wider transition-all duration-300 hover:scale-105`}
                style={{
                  color: currentTab === tab ? "var(--peach)" : "var(--cream)",
                }}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    currentTab === tab
                      ? "bg-white/10 backdrop-blur-sm"
                      : "bg-transparent group-hover:bg-white/5 group-hover:backdrop-blur-sm"
                  }`}
                ></span>
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-2 h-2 border border-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Corner Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
