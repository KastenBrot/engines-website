"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
