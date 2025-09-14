import AdminLoginForm from "../components/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div className="relative bg-[#458FCD] min-h-screen flex justify-center items-center">
      <h2 className="absolute text-5xl font-bold tracking-wide text-white top-36">
        Admin Login
      </h2>
      <div className="md:w-1/2 lg:w-1/3">
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
