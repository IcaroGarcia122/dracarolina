import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative py-8 sm:py-12 bg-[#FAF7F4] overflow-hidden select-none" aria-hidden="true">
      {/* Subtle ambient rose glow behind divider */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-16 bg-[#DFC8C2]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4 sm:gap-6 relative z-10">
        {/* Left hairline gradient */}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFC8C2] to-[#B87986]/60" />

        {/* Center decorative botanical emblem */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#DFC8C2]/80 shadow-2xs backdrop-blur-xs">
          {/* Delicate branch emblem */}
          <svg
            className="w-5 h-5 text-[#B87986]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22C12 16 10 10 6 6" />
            <path d="M12 18C15 15 17 11 16 7C13 7 10 10 12 13" />
            <path d="M11 12C8 10 7 6 9 3C12 4 13 8 11 12" />
            <path d="M12 22C12 18 14 13 18 10" />
          </svg>
          <span className="font-serif italic text-xs tracking-wider text-[#67434B]">
            cuidado singular
          </span>
          <svg
            className="w-5 h-5 text-[#B87986] -scale-x-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22C12 16 10 10 6 6" />
            <path d="M12 18C15 15 17 11 16 7C13 7 10 10 12 13" />
            <path d="M11 12C8 10 7 6 9 3C12 4 13 8 11 12" />
            <path d="M12 22C12 18 14 13 18 10" />
          </svg>
        </div>

        {/* Right hairline gradient */}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#DFC8C2] to-[#B87986]/60" />
      </div>
    </div>
  );
};
