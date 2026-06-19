import gymInterior from "../assets/gym3.webp";

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Gym</h2>

            <p className="text-gray-600 mb-6">
              We are committed to helping people achieve their fitness goals
              through expert guidance, modern equipment, and a motivating
              environment.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-red-500">10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-red-500">500+</h3>
                <p>Active Members</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-red-500">20+</h3>
                <p>Certified Trainers</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-red-500">100%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={gymInterior}
              alt="Gym Interior"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
