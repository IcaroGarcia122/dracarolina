import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'modal' | 'compact';
  isScrolled?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  isScrolled = false,
}) => {
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col text-left ${className}`}>
        <span className="font-serif text-2xl sm:text-[27px] font-normal tracking-tight text-[#2E2225] leading-none">
          DRA. CAROLINA ZAMPRONHA
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#8C4E5B] font-semibold mt-1.5 pl-0.5">
          MENTE & SAÚDE
        </span>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className={`flex flex-col text-left ${className}`}>
        <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#2E2225] leading-none">
          DRA. CAROLINA ZAMPRONHA
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#8C4E5B] font-semibold mt-1.5 pl-0.5">
          MENTE & SAÚDE
        </span>
      </div>
    );
  }

  // Header variant (adaptive for scroll)
  return (
    <div className={`flex flex-col text-left transition-all duration-200 ${className}`}>
      <span
        className={`font-serif tracking-tight text-[#2E2225] leading-none transition-all duration-200 group-hover:text-[#B87986] ${
          isScrolled
            ? 'text-lg sm:text-xl font-normal'
            : 'text-xl sm:text-[25px] font-normal'
        }`}
      >
        DRA. CAROLINA ZAMPRONHA
      </span>
      <span
        className={`font-sans tracking-[0.28em] uppercase text-[#8C4E5B] font-semibold transition-all duration-200 pl-0.5 ${
          isScrolled
            ? 'text-[8px] sm:text-[9px] mt-1'
            : 'text-[9px] sm:text-[10px] mt-1.5'
        }`}
      >
        MENTE & SAÚDE
      </span>
    </div>
  );
};
