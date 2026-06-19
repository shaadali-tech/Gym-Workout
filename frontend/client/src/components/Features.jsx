import dumbbellImage from "../assets/gym2.webp";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={dumbbellImage}
              alt="Gym Equipment"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Why Choose Our Gym?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">🏋️ Modern Equipment</h3>
                <p className="text-gray-600">
                  Train with world-class fitness equipment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">💪 Expert Trainers</h3>
                <p className="text-gray-600">
                  Certified trainers to guide your journey.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">🥗 Nutrition Plans</h3>
                <p className="text-gray-600">
                  Personalized diet plans for better results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">📈 Progress Tracking</h3>
                <p className="text-gray-600">
                  Track your fitness growth and achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
