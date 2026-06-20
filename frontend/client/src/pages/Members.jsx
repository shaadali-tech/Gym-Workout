import { useEffect, useState } from "react";
import api from "../services/api";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [membershipPlan, setMembershipPlan] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/members", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMembers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addMember = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/members",
        {
          name,
          email,
          phone,
          age,
          membershipPlan,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchMembers();

      setName("");
      setEmail("");
      setPhone("");
      setAge("");
      setMembershipPlan("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMember = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/members/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchMembers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Member Management</h1>

      {/* Add Member Form */}
      <form
        onSubmit={addMember}
        className="bg-white p-6 rounded-xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Member</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <select
            value={membershipPlan}
            onChange={(e) => setMembershipPlan(e.target.value)}
            className="border p-3 rounded-lg md:col-span-2"
            required
          >
            <option value="">Select Membership Plan</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Add Member
        </button>
      </form>

      {/* Members Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Age</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr
                  key={member._id}
                  className="border-b text-center hover:bg-gray-50"
                >
                  <td className="p-4">{member.name}</td>

                  <td className="p-4">{member.email}</td>

                  <td className="p-4">{member.phone}</td>

                  <td className="p-4">{member.age}</td>

                  <td className="p-4">{member.membershipPlan}</td>

                  <td className="p-4">
                    <button
                      onClick={() => deleteMember(member._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-6 text-center">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
