const DashboardCards = ({ stats }) => {
  const cards = [
    {
      title: "Members",
      value: stats.totalMembers,
      color: "bg-blue-500",
    },
    {
      title: "Trainers",
      value: stats.totalTrainers,
      color: "bg-green-500",
    },
    {
      title: "Messages",
      value: stats.totalMessages,
      color: "bg-red-500",
    },
    {
      title: "Plans",
      value: stats.totalPlans,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white p-6 rounded-xl shadow-lg`}
        >
          <h3 className="text-xl font-semibold">{card.title}</h3>

          <p className="text-4xl font-bold mt-4">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
