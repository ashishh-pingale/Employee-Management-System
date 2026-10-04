const Stats = () => {

  const stats = [
    {
      title: "New Tasks",
      value: 0,
      color: "text-blue-400",
    },
    {
      title: "Completed",
      value: 3,
      color: "text-emerald-400",
    },
    {
      title: "Accepted",
      value: 0,
      color: "text-amber-400",
    },
    {
      title: "Failed",
      value: 1,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-[#15181d] border border-gray-800 rounded-lg p-5"
        >
          <p className="text-sm text-gray-500">
            {stat.title}
          </p>

          <p className={`text-2xl font-semibold mt-3 ${stat.color}`}>
            {stat.value}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Stats;