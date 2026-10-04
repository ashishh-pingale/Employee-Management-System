const CreateTaskForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task created");
  };

  return (
    <div className="w-full max-w-lg bg-[#15181d] border border-zinc-800 rounded-xl p-6">

      {/* Heading */}
      <div className="mb-7">

        <h2 className="text-xl font-semibold">
          Create Task
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Assign a new task to an employee
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        {/* Task Title */}
        <div className="mb-5">

          <label className="block text-sm text-zinc-300 mb-2">
            Task Title
          </label>

          <input
            type="text"
            placeholder="Enter task title"
            required
            className="w-full h-11 px-4 rounded-md bg-[#1d2025] border border-zinc-700 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-blue-500 transition"
          />

        </div>

        {/* Description */}
        <div className="mb-5">

          <label className="block text-sm text-zinc-300 mb-2">
            Description
          </label>

          <textarea
            rows="5"
            maxLength="500"
            placeholder="Enter task description (Max 500 words)"
            required
            className="w-full px-4 py-3 rounded-md bg-[#1d2025] border border-zinc-700 text-sm text-white placeholder:text-zinc-600 outline-none resize-none focus:border-blue-500 transition"
          />

        </div>

        {/* Date */}
        <div className="mb-5">

          <label className="block text-sm text-zinc-300 mb-2">
            Due Date
          </label>

          <input
            type="date"
            required
            className="w-full h-11 px-4 rounded-md bg-[#1d2025] border border-zinc-700 text-sm text-white outline-none focus:border-blue-500 transition"
          />

        </div>

        {/* Assign To */}
        <div className="mb-5">

          <label className="block text-sm text-zinc-300 mb-2">
            Assign To
          </label>

          <select
            required
            className="w-full h-11 px-4 rounded-md bg-[#1d2025] border border-zinc-700 text-sm text-zinc-300 outline-none focus:border-blue-500 transition"
          >
            <option value="">Select employee</option>
            <option value="sarthak">Sarthak</option>
            <option value="rahul">Rahul</option>
            <option value="priya">Priya</option>
          </select>

        </div>

        {/* Category */}
        <div className="mb-7">

          <label className="block text-sm text-zinc-300 mb-2">
            Category
          </label>

          <input
            type="text"
            placeholder="Design, Development, etc."
            className="w-full h-11 px-4 rounded-md bg-[#1d2025] border border-zinc-700 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-blue-500 transition"
          />

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-11 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition"
        >
          Create Task
        </button>

      </form>

    </div>
  );
};

export default CreateTaskForm;