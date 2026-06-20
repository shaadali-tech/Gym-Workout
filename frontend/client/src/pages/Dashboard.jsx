import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import DashboardCards from "../components/DashboardCard";
import RecentMembers from "../components/RecentMembers";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalMessages: 0,
    totalPlans: 0,
    totalTrainers: 0,
  });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
        const dashboardRes = await api.get("/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(dashboardRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-200 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Overview
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Dashboard
              </h1>
              <p className="mt-1 text-slate-600">Welcome, {user?.name}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/members"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Manage Members
              </Link>

              <Link
                to="/"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Home
              </Link>

              <button
                onClick={logout}
                className="rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 space-y-6">
          <DashboardCards stats={stats} />
          <RecentMembers />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              User Information
            </h2>

            <div className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-slate-900">Name:</span>{" "}
                {user?.name}
              </p>

              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
