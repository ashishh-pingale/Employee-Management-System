import TaskCard from "./TaskCard";

const TaskList = () => {

  const tasks = [
    {
      title: "Employee Login Issue",
      description: "Review and resolve the reported login issue.",
      priority: "High",
      date: "20 Feb 2024",
    },
    {
      title: "Employee Data Update",
      description: "Update the employee information as requested.",
      priority: "Medium",
      date: "20 Feb 2024",
    },
    {
      title: "Profile Verification",
      description: "Verify the submitted employee profile details.",
      priority: "Low",
      date: "18 Feb 2024",
    },
  ];

  return (
    <section>

      <div className="flex justify-between items-end mb-5">

        <div>
          <h2 className="text-lg font-semibold">
            Assigned Tasks
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Review and manage your assigned tasks
          </p>
        </div>

        <button className="border border-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
          Filter
        </button>

      </div>

      <div className="space-y-3">

        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            priority={task.priority}
            date={task.date}
          />
        ))}

      </div>

    </section>
  );
};

export default TaskList;