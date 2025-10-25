import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Caraousel({ children }) {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      animationDuration: 600,
      gap: 20,
      breakpoints: {
        1024: { perView: 3, gap: 16 },
        640: { perView: 2, gap:5 },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="glide-04 relative w-full">
      {/* Slides */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="flex relative w-full overflow-hidden py-6 gap-2">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="glide__slide">
              {child}
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div
        className="flex w-full items-center justify-end gap-2 p-4"
        data-glide-el="controls"
      >
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:bg-[#008a0c] cursor-pointer hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>

        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:bg-[#008a0c] cursor-pointer hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
