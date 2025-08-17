import { useMemo, useEffect } from "react";
interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const snowflakes = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, index) => ({
        id: index,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
      })),
    []
  );

  useEffect(() => {
    // Dynamically load Google Font (Orbitron looks modern, but you can pick another)
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <section
      id={id}
      className="h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/mountain-honey-hero.jpg')" }} // Placeholder: Replace with actual image
    >
      {/* Darker Overlay for Background */}
      <div className="absolute inset-0 bg-honey-green bg-opacity-60"></div>
      {/* Snowfall Container */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
            animation: `fall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
      <div className="h-full w-full flex items-center justify-center relative z-10">
        {/* <img
          src="/logo.jpg" // Placeholder: Replace with actual logo
          alt="Mountain Honey Logo"
          className="max-h-32 md:max-h-48"
        /> */}
        <h1
        className="text-6xl md:text-8xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        ALVIO
      </h1>
      </div>
    </section>
  );
};

export default Hero;