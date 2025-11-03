import React from "react";

export default function Avatar({
  name = "User",
  src = null,
  size = 40,
  className = "",
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizeClass =
    {
      32: "w-8 h-8 text-sm",
      40: "w-10 h-10 text-base",
      48: "w-12 h-12 text-lg",
    }[size] || "w-10 h-10 text-base";

  return (
    <div
      className={`${sizeClass} rounded-full overflow-hidden inline-flex items-center justify-center ${className}`}
      aria-hidden={src ? "false" : "true"}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center font-medium text-white"
          style={{
            backgroundImage: "linear-gradient(135deg,#38bdf8,#2563eb)",
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
