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
    <div>
      <h1>Dashboard</h1>

      <h2>Welcome {user?.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
