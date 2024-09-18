import React, { useEffect, useState } from 'react';
import axios from "axios";

function DisplayData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Bad Request"));
  }, []);

  return (
    <>
      <div className="container py-5 text-center">
        <h1 className="mb-4 display-5 fw-bold">User Data</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered shadow-sm rounded">
            <thead className="bg-success text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="table-row">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DisplayData;

