interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/mountain-honey-hero.jpg')" }} // Placeholder: Replace with actual image
    >
      {/* Darker Overlay for Background */}
      <div className="absolute inset-0 bg-honey-green bg-opacity-60"></div>
      {/* Snowfall Container */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="snowflake absolute bg-white rounded-full opacity-80"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="h-full w-full flex items-center justify-center relative z-10">
        <img
          src="/logo.jpg" // Placeholder: Replace with actual logo
          alt="Mountain Honey Logo"
          className="max-h-32 md:max-h-48"
        />
      </div>
    </section>
  );
};

export default Hero;