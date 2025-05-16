"use client";
import About from "@/components/About";
// import Creative from "@/components/Creative";
import FilmSection from "@/components/FilmSection";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import { Tech } from "@/components/Tech";
import TopButton from "@/components/TopButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <video autoPlay muted className="w-full h-screen object-cover">
          {/* Mobile Video */}
          <source
            src="/Mi logo animation 9-16.mp4"
            type="video/mp4"
            media="(max-width: 640px)"
          />

          {/* Tablet Video */}
          <source
            src="/Mi logo animation 4-3.mp4"
            type="video/mp4"
            media="(min-width: 641px) and (max-width: 1024px)"
          />

          {/* Desktop Video */}
          <source
            src="/opening video.mp4"
            type="video/mp4"
            media="(min-width: 1025px)"
          />

          {/* Fallback Video */}
          <source src="/opening video.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="w-full mx-auto">
          <HomePage />
          <TopButton />
          <Services />
          <Tech />
          <FilmSection />
          <About />
          <Footer />
        </div>
      )}
    </>
  );
}
