const Header = () => {
  return (
    <header className="bg-[#15181d] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">

        <div>
          <h1 className="text-xl font-semibold">
            Employee Panel
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your tasks and activities
          </p>
        </div>

        <div className="flex items-center gap-5">

          <div className="text-right">
            <p className="text-sm font-medium">
              Sarthak
            </p>

            <p className="text-xs text-gray-500">
              Employee
            </p>
          </div>

          <button className="border border-gray-700 px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 transition">
            Logout
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;