import AdminHeader from "../Admin Dash Comp/AdminHeader";
import CreateTaskForm from "../Admin Dash Comp/CreateTaskForm";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white">

      <AdminHeader />

      <main className="flex justify-center px-4 py-10">
        <CreateTaskForm />
      </main>

    </div>
  );
};

export default AdminDashboard;