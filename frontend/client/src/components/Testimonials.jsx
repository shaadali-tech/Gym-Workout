const Testimonials = () => {
  const testimonials = [
    {
      name: "Hamid Usmani",
      review: "I lost 15kg in just 6 months. The trainers are amazing!",
    },
    {
      name: "Shaad Ali",
      review: "Best gym in the city. Modern equipment and great atmosphere.",
    },
    {
      name: "Aman Akhtar",
      review:
        "The nutrition guidance and workout plans helped me achieve my goals.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Members Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-600 mb-4">"{item.review}"</p>

              <h3 className="font-bold text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
