"use client";

interface ButtonTestProps {
  children: React.ReactNode;
  className?: string;
  textStyle?: string;
  onClick: () => void;
}

export default function Button({
  children,
  className,
  textStyle,
  onClick,
}: ButtonTestProps) {

  return (
    <button
      className={`${className} rounded p-4 cursor-pointer transition ease-in-out duration-300 uppercase drop-shadow-2xl ${textStyle}`}
      onClick={onClick}
    >
        {children}
    </button>
  );
}
