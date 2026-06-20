import { Link } from "react-router-dom";
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

          <Link
            to="/register"
            className="bg-red-500 px-6 py-3 rounded-lg text-white"
          >
            Join Now
          </Link>

          <a
            href="#plains"
            className="border border-white px-6 py-3 rounded-lg text-white"
          >
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
