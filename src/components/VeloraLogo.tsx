import React from "react";

interface VeloraLogoProps {
  variant?: "full" | "icon";
  className?: string;
  size?: number | string;
  theme?: "light" | "dark";
}

export default function VeloraLogo({
  variant = "full",
  className = "",
  size,
  theme = "light"
}: VeloraLogoProps) {
  // Styles depending on sizes and layout requirements
  const heightStyle = size ? { height: size } : {};
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#E2E8F0" : "#083B25"; // slate-200 on dark, ultra-premium deep forest green on light
  const secondaryColor = "#71B33C"; // crisp high-contrast emerald lime green
  const branchColor = isDark ? "#94A3B8" : "#5C3C13"; // slate-400 on dark, dark brown on light

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} overflow-visible`}
        style={heightStyle}
        height={size || "40"}
      >
        {/* Top green leaves */}
        <g id="top-leaves">
          {/* Left leaf */}
          <path
            d="M 50 40 C 45 28, 30 20, 20 20 C 20 30, 32 42, 50 40 Z"
            fill={secondaryColor}
          />
          <path
            d="M 20 20 C 30 24, 38 32, 43 38"
            stroke="#5A962E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Right leaf */}
          <path
            d="M 50 40 C 55 28, 70 20, 80 20 C 80 30, 68 42, 50 40 Z"
            fill={secondaryColor}
          />
          <path
            d="M 80 20 C 70 24, 62 32, 57 38"
            stroke="#5A962E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* Double-layered Green Circle Emblem for 'O' */}
        <g id="circle-emblem">
          {/* Outer circle */}
          <circle
            cx="50"
            cy="70"
            r="28"
            stroke={primaryColor}
            strokeWidth="2.5"
            fill={isDark ? "#18181B" : "#FFFFFF"} // dark zinc or pure white
          />
          {/* Inner details circle */}
          <circle
            cx="50"
            cy="70"
            r="24"
            stroke={secondaryColor}
            strokeWidth="1.2"
            strokeDasharray="2 1.5"
          />
        </g>

        {/* Orange Sprout / Swirl pattern */}
        <g id="orange-swirl">
          <path
            d="M 44 84 C 36 78, 36 64, 48 58 C 58 53, 68 62, 66 73 C 64 80, 56 83, 49 80 C 45 78, 45 74, 49 73 C 53 72, 56 74, 57 71 C 58 67, 52 63, 47 67 C 43 70, 42 77, 47 81 C 49 82, 45 84, 44 84 Z"
            fill="#F37021"
          />
          <path
            d="M 54 54 C 44 50, 36 58, 42 68 C 42 68, 38 62, 44 56 C 49 51, 54 54, 54 54 Z"
            fill="#F99D1C"
          />
          <circle cx="56" cy="62" r="2" fill="#F99D1C" />
          <circle cx="61" cy="67" r="1.5" fill="#F37021" />
        </g>

        {/* Brown / Slate Wheat Seeds in bottom right */}
        <g id="brown-grains">
          <path d="M 64 78 Q 72 82, 70 86" stroke={branchColor} strokeWidth="1" strokeLinecap="round" />
          <path d="M 66 74 C 70 72, 71 76, 68 77 C 66 78, 65 76, 66 74 Z" fill={branchColor} />
          <path d="M 71 78 C 75 77, 75 81, 71 82 C 69 82, 69 80, 71 78 Z" fill={isDark ? "#64748B" : "#8C6239"} />
          <path d="M 67 83 C 70 84, 68 88, 65 87 C 64 86, 65 84, 67 83 Z" fill={branchColor} />
        </g>
      </svg>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1 cursor-pointer select-none ${className}`}
      style={heightStyle}
    >
      {/* Handcrafted vector wordmark aligned with exact shapes */}
      <svg
        viewBox="0 0 350 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        style={{ maxHeight: "100%" }}
      >
        {/* Styled Letter 'V' */}
        <path
          d="M 12 72 Q 13 46, 21 34 Q 32 18, 54 20 Q 42 27, 34 38 Q 28 48, 28 62 Q 28 78, 34 84 L 38 84 Q 46 84, 52 68 Q 57 56, 61 48 M 52 68 L 60 48"
          stroke={primaryColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 'e' */}
        <path
          d="M 103 66 C 103 46, 78 46, 78 64 C 78 80, 102 81, 106 74 M 78 64 L 102 64"
          stroke={primaryColor}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 'l' */}
        <path
          d="M 121 22 L 121 78"
          stroke={primaryColor}
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* The 'o' emblem inserted as inline circle sprout coordinates */}
        <g transform="translate(112, 10)">
          {/* Top Green Leaves */}
          <g>
            <path d="M 50 35 C 45 23, 30 15, 20 15 C 20 25, 32 37, 50 35 Z" fill={secondaryColor} />
            <path d="M 50 35 C 55 23, 70 15, 80 15 C 80 25, 68 37, 50 35 Z" fill={secondaryColor} />
          </g>

          {/* Double Layer circles */}
          <circle cx="50" cy="65" r="28" stroke={primaryColor} strokeWidth="6" fill={isDark ? "#09090B" : "#FFFFFF"} />
          <circle cx="50" cy="65" r="22" stroke={secondaryColor} strokeWidth="1.5" strokeDasharray="2.5 1.5" />

          {/* Orange energy flow */}
          <path
            d="M 44 79 C 36 73, 36 59, 48 53 C 58 48, 68 57, 66 68 C 64 75, 56 78, 49 75 C 45 73, 45 69, 49 68 Q 50 64, 53 66"
            stroke="#F37021"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 54 49 C 44 45, 36 53, 42 63"
            stroke="#F99D1C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="57" cy="57" r="2" fill="#F99D1C" />

          {/* Wheat grains in bottom right */}
          <path d="M 64 73 Q 71 77, 69 81" stroke={branchColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M 66 69 C 70 67, 71 71, 68 72 Z" fill={branchColor} />
          <path d="M 71 73 C 75 72, 75 76, 71 77 Z" fill={isDark ? "#64748B" : "#8C6239"} />
        </g>

        {/* Letter 'r' */}
        <path
          d="M 218 52 L 218 78 M 218 58 Q 224 48, 236 50"
          stroke={secondaryColor}
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Letter 'a' */}
        <path
          d="M 275 78 L 275 52 M 275 56 C 275 42, 246 45, 246 64 C 246 80, 275 79, 275 78"
          stroke={secondaryColor}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
