const Plains = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: ["Gym Access", "Locker Facility", "Basic Support"],
    },
    {
      name: "Standard",
      price: "₹1499",
      features: ["Gym Access", "Personal Trainer", "Diet Plan"],
    },
    {
      name: "Premium",
      price: "₹2499",
      features: ["Gym Access", "Personal Trainer", "Diet Plan", "24/7 Support"],
    },
  ];

  return (
    <section className="py-20 bg-gray-100 " id="plans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Membership Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

              <p className="text-4xl font-bold text-red-500 mb-6">
                {plan.price}
                <span className="text-lg text-gray-500">/month</span>
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plains;
