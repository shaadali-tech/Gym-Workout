import trainer1 from "../assets/brock.webp";
import trainer2 from "../assets/roman.webp";
import trainer3 from "../assets/arnold.webp";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      image: trainer1,
      name: "Brock Lesnar",
      role: "Fitness Trainer",
      experience: "5+ Years Experience",
      specialization: "Weight Loss & Strength Training",
    },
    {
      id: 2,
      image: trainer2,
      name: "Roman Reigns",
      role: "Nutrition Expert",
      experience: "7+ Years Experience",
      specialization: "Diet & Nutrition Planning",
    },
    {
      id: 3,
      image: trainer3,
      name: "Arnold Schwarzenegger  ",
      role: "Strength Coach",
      experience: "6+ Years Experience",
      specialization: "Bodybuilding & Muscle Gain",
    },
  ];

  return (
    <section className="py-20 bg-black text-white" id="trainers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Meet Our Trainers</h2>

          <p className="text-gray-400 mt-4 text-lg">
            Learn from experienced fitness professionals dedicated to helping
            you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/30 hover:-translate-y-3 transition-all duration-300"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-96 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{trainer.name}</h3>

                <p className="text-red-500 font-semibold mt-2">
                  {trainer.role}
                </p>

                <p className="text-gray-600 mt-3">{trainer.specialization}</p>

                <p className="mt-4 font-medium">{trainer.experience}</p>

                <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
