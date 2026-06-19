const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Contact Us</h2>

          <p className="text-gray-600 mt-4">
            Have questions? Get in touch with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <p>📍 Noida, Uttar Pradesh</p>
              <p>📞 +91 7983372074</p>
              <p>✉️ alishaad051@gmail.com</p>
              <p>🕒 Mon - Sat: 6AM - 10PM</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
