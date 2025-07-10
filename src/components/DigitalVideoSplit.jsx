"use client";

import Image from "next/image";

export default function DigitalVideoSplit() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      title: "DIGITALS",
      image: "/images/april18030.jpg",
      onClick: () => scrollToSection("digitals"),
    },
    {
      title: "VIDEOS",
      image: "/images/april17657.jpg",
      onClick: () =>
        window.open(
          "https://wa.me/919058968080?text=Send%20your%20videos",
          "_blank"
        ),
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto mt-16 px-4"
      aria-label="Digital and Video Navigation Section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") item.onClick();
            }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer h-[400px] md:h-[500px] focus:outline-none focus-visible:ring-0"
            aria-label={`Navigate to ${item.title}`}
          >
            <Image
              src={item.image}
              alt={`${item.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-semibold tracking-wide text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
