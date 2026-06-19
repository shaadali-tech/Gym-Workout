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
  const deleteMember = async (id) => {
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

  return (
    <div>
      <form onSubmit={addMember}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Membership Plan"
          value={membershipPlan}
          onChange={(e) => setMembershipPlan(e.target.value)}
        />

        <button type="submit">Add Member</button>
      </form>
      <h1>Members</h1>

      {members.length > 0 ? (
        members.map((currentMember) => (
          <div key={currentMember._id}>
            <h3>{currentMember.name}</h3>
            <p>{currentMember.email}</p>
            <p>{currentMember.phone}</p>
            <p>{currentMember.membershipPlan}</p>
            <hr />
            <button onClick={() => deleteMember(currentMember._id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading members...</p>
      )}
    </div>
  );
};

export default Members;
