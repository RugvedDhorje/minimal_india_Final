"use client";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
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
          <source
            src="/WhatsApp Video 2025-02-15 at 1.01.23 PM.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div>
          <HomePage />
          <Services />
        </div>
      )}
    </>
  );
}
