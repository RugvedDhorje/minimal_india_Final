"use client";
import Creative from "@/components/Creative";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import { Tech } from "@/components/Tech";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <video autoPlay muted className="w-full h-screen object-cover">
          {/* Mobile Video */}
          <source
            src="/Minimal India mobile.mp4"
            type="video/mp4"
            media="(max-width: 640px)"
          />

          {/* Tablet Video */}
          <source
            src="/Minimal India tablet.mp4"
            type="video/mp4"
            media="(min-width: 641px) and (max-width: 1024px)"
          />

          {/* Desktop Video */}
          <source
            src="/WhatsApp Video 2025-02-15 at 1.01.23 PM.mp4"
            type="video/mp4"
            media="(min-width: 1025px)"
          />

          {/* Fallback Video */}
          <source
            src="/WhatsApp Video 2025-02-15 at 1.01.23 PM.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="w-full mx-auto">
          <HomePage />
          <Services />
          <Tech />
          <Creative />
          <Footer />
        </div>
      )}
    </>
  );
}
