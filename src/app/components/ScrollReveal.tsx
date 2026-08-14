"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  distance?: string; // e.g. "50px"
  className?: string;
  threshold?: number;
  scale?: number; // e.g. 0.95 to 1
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  distance = "50px",
  className = "",
  threshold = 0.05,
  scale = 1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px", // Trigger when element is 80px before entering viewport bottom
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0) scale(1)";

    let translateVal = "";
    switch (direction) {
      case "up":
        translateVal = `translateY(${distance})`;
        break;
      case "down":
        translateVal = `translateY(-${distance})`;
        break;
      case "left":
        translateVal = `translateX(${distance})`;
        break;
      case "right":
        translateVal = `translateX(-${distance})`;
        break;
      case "fade":
      default:
        translateVal = "translate(0, 0)";
        break;
    }

    return `${translateVal} scale(${scale})`;
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
