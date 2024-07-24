"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 100,
        backgroundColor: "#fafafa",
        border: "1px solid #18181b",
        padding: 12,
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
    >
      <ArrowUp className="size-5" />
    </button>
  );
};