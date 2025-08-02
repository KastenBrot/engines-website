"use client";

interface ButtonTestProps {
  children: React.ReactNode;
  className?: string;
  textStyle?: string;
  rotateButton?: boolean;
  onClick: () => void;
}

export default function ButtonTilted({
  children,
  className,
  textStyle,
  rotateButton,
  onClick,
}: ButtonTestProps) {
  const textX = rotateButton ? "55%" : "45%";

  return (
    <button
      className={`${className} relative w-full h-full cursor-pointer transition ease-in-out duration-300 uppercase drop-shadow-2xl ${
        rotateButton ? "rotate-180" : "rotate-0"
      }`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 67.5">
        <path
          d="M 7 63 L 201 63 C 204 63 205 61 205.7 59.6 L 231.2022 6.5982 C 231.5762 5.8238 231.5288 4.9071 231.0705 4.1748 C 230.6122 3.4425 229.8061 3 228.9421 3 L 6.9982 3 C 6 3 4.9 3.4 4.1 4.1 C 3.4 4.9 3 6 3 7 L 3 59.5 C 3 60.5 3.4 61.5 4.2 62.3 C 4.9 62.9 6 63 7 63 Z M 7 63"
          strokeWidth="4"
          fillRule="evenodd"
          clipRule="evenodd"
        />

        <text
          className={`${textStyle} ${
            rotateButton ? "-rotate-180" : "rotate-0"
          } origin-center fill-current`}
          x={textX}
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {children}
        </text>
      </svg>
    </button>
  );
}
