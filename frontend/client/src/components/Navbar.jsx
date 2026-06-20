import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-red-500">GYM PRO</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-red-500">
            Home
          </a>

          <a href="#about" className="hover:text-red-500">
            About
          </a>

          <a href="#plans" className="hover:text-red-500">
            Plans
          </a>

          <a href="#trainers" className="hover:text-red-500">
            Trainers
          </a>

          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>

          <Link to="/login" className="bg-red-500 px-4 py-2 rounded-lg">
            Login
          </Link>

          <Link
            to="/register"
            className="border border-red-500 px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-center py-6 space-y-4">
          <a href="#home" className="block">
            Home
          </a>

          <a href="#about" className="block">
            About
          </a>

          <a href="#plans" className="block">
            Plans
          </a>

          <a href="#trainers" className="block">
            Trainers
          </a>

          <a href="#contact" className="block">
            Contact
          </a>

          <Link to="/login" className="block">
            Login
          </Link>

          <Link to="/register" className="block">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
