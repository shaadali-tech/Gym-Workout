import heroImage from "../assets/gym2.webp";
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen pt-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Transform Your Body, Transform Your Life
          </h1>

          <p className="text-xl mb-8">
            Join the best fitness community and achieve your dream physique.
          </p>

          <button className="bg-red-600 px-8 py-4 rounded-lg mr-4">
            Join Now
          </button>

          <button className="border border-white px-8 py-4 rounded-lg">
            View Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
