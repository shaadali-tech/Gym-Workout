import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>

          <p className="text-gray-600 mt-2">Welcome, {user?.name}</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl">Members</h3>
          <p className="text-4xl font-bold mt-3">150</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl">Trainers</h3>
          <p className="text-4xl font-bold mt-3">12</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl">Messages</h3>
          <p className="text-4xl font-bold mt-3">45</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl">Plans</h3>
          <p className="text-4xl font-bold mt-3">3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
