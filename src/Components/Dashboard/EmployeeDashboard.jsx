import Header from "../EmployeeDashComps/Header";
import Stats from "../EmployeeDashComps/Stats";
import TaskList from "../EmployeeDashComps/TaskList";


const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white">

      <Header /> 

      <main className="max-w-6xl mx-auto px-5 py-8">
        <Stats />
        <TaskList />
      </main>

    </div>
  );
};

export default EmployeeDashboard;