const GalaxyParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 1 + 1, // Random size between 2px and 6px
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 2 + "s", // Random delay for staggered animation
  }));

  return (
    <div className="relative w-full h-[100px] -z-10 overflow-hidden">
      {/* Galaxy Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full animate-galaxyMove"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            opacity: Math.random() * 0.5 + 0.3, // Random opacity
          }}
        ></div>
      ))}
    </div>
  );
};

export default GalaxyParticles;
