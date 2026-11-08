"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingDesignMenuButton() {
  const pathname = usePathname();

  // Hide the floating button on the Design Lab homepage itself
  if (pathname === "/" || pathname === "/designs") {
    return null;
  }

  return (
    <Link
      href="/"
      aria-label="Return to Design Lab Menu"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        backgroundColor: "rgba(17, 26, 24, 0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.22)",
        borderRadius: "999px",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        boxShadow: "0 8px 28px rgba(0, 0, 0, 0.35)",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
        e.currentTarget.style.backgroundColor = "rgba(10, 16, 15, 0.98)";
        e.currentTarget.style.borderColor = "#e9b084";
        e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.backgroundColor = "rgba(17, 26, 24, 0.94)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(0, 0, 0, 0.35)";
      }}
    >
      <span>Design Lab</span>
      <span
        style={{
          display: "inline-grid",
          placeItems: "center",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "rgba(233, 176, 132, 0.2)",
          color: "#e9b084",
          fontSize: "0.85rem",
          fontWeight: 900,
        }}
      >
        ⊞
      </span>
    </Link>
  );
}
