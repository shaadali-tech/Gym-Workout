const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-red-500">GYM PRO</h2>
            <p className="mt-4 text-gray-400">
              Transform your body and achieve your fitness goals with us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Plans</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <p>Email: alishaad051@gmail.com</p>
            <p>Phone: +91 7983372074</p>
            <p>Location: Noida, India</p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Gym Pro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
