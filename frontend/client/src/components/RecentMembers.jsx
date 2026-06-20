import { useEffect, useState } from "react";
import api from "../services/api";

const RecentMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/members/recent", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMembers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Members</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Phone</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{member.name}</td>

                <td className="p-3">{member.email}</td>

                <td className="p-3">{member.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentMembers;
