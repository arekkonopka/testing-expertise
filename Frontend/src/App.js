import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => setUsers(res?.data));
  }, []);
  return (
    <div className="App">
      <h1>Lista uzytkowników</h1>
      <ol>
        {users?.map((el, idx) => (
          <li key={idx}>
            <p>name: {el.name}</p>
            <p>description: {el.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
