"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: string;
}

export default function Button({ children, onClick, style }: ButtonProps) {
  return (
    <button className={`btn ${style} `} onClick={onClick}>
      {children}
    </button>
  );
}
