// src/components/ui/button.jsx
import React from "react";

export default function Button({
  children,
  className = "",
  variant = "solid", // "solid" | "outline"
  ...props
}) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const v = variants[variant] || variants.solid;

  return (
    <button {...props} className={`${base} ${v} ${className}`}>
      {children}
    </button>
  );
}
