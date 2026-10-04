const AdminHeader = () => {
  return (
    <header className="border-b border-zinc-800 bg-[#0f1115]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        <div>
          <h1 className="text-xl font-semibold">
            Admin Panel
          </h1>

          <p className="text-sm text-zinc-500 mt-1">
            Manage employee tasks
          </p>
        </div>

        <button className="border border-zinc-700 text-zinc-300 px-4 py-2 rounded-md text-sm hover:bg-zinc-900 transition">
          Logout
        </button>

      </div>
    </header>
  );
};

export default AdminHeader;