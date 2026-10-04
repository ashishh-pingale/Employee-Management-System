const TaskCard = ({ title, description, priority, date }) => {

  const priorityColor = {
    High: "text-red-400 bg-red-400/10",
    Medium: "text-amber-400 bg-amber-400/10",
    Low: "text-blue-400 bg-blue-400/10",
  };

  return (
    <div className="bg-[#15181d] border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition">

      <div className="flex justify-between gap-5">

        <div>

          <div className="flex items-center gap-3 mb-2">

            <h3 className="font-medium text-gray-100">
              {title}
            </h3>

            <span
              className={`text-xs px-2 py-1 rounded ${
                priorityColor[priority]
              }`}
            >
              {priority}
            </span>

          </div>

          <p className="text-sm text-gray-500">
            {description}
          </p>

        </div>

        <span className="text-xs text-gray-600 whitespace-nowrap">
          {date}
        </span>

      </div>

      <div className="flex gap-2 mt-5">

        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition">
          Accept
        </button>

        <button className="border border-gray-700 text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-md text-sm transition">
          View Details
        </button>

      </div>

    </div>
  );
};

export default TaskCard;