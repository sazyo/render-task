import React, { useState } from "react";
import CustomButton from "./CustomButton";
import AddUser from "./AddUser";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Tariq", email: "tariq@gmail.com", age: 30, status: true },
    { id: 2, name: "Anas", email: "anas@gmail.com", age: 25, status: false },
    { id: 3, name: "Hala", email: "halaari@gmail.com", age: 28, status: true },
    { id: 4, name: "Asmaa", email: "asmaa@gmail.com", age: 22, status: true },
    { id: 5, name: "Samah", email: "", age: 27, status: true },
  ]);



  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">User List</h1>

      <AddUser />

      {users.length === 0 && <p>No users found.</p>}

      {users.map((user) => (
        <div key={user.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text mb-1">
              <strong>Age:</strong> {user.age}
            </p>
            <p className="card-text mb-3">
              <strong>Status:</strong> {user.status ? "Active" : "Inactive"}
            </p>

            <CustomButton variant="danger" onClick={() => { }}>
              Delete
            </CustomButton>
            <CustomButton variant="secondary" onClick={() => { }}>
              Edit
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
}
