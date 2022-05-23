import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUsers(res?.data))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <>
      <h1>Lista uzytkowników</h1>
      <h2>Dzialajace logowanie</h2>
      <ol>
        {users?.map((el, idx) => (
          <li key={idx}>
            <p>name: {el.name}</p>
            <p>description: {el.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Dashboard;
