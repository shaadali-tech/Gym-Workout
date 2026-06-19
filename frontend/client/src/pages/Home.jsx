import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plains from "../components/Plains";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Trainers from "../components/Trainers";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Plains />
      <About />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
