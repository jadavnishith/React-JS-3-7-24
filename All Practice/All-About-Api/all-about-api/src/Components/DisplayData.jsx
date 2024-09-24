import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function DisplayData() {
  const [col, setCol] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch users data from the backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => {
        setCol(Object.keys(res.data[0]));
        setUsers(res.data);
      })
      .catch((err) => console.log("Bad Request"));
  };

  // Handle delete 
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4040/users/${id}`)
      .then((res) => {
        console.log("User deleted:", res.data);
        fetchUsers(); // Fetch the updated users list after deletion
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container py-5 text-center">
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">ADD</Link>
        </div>
        <h1 className="mb-4 display-5 fw-bold">User Data</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered shadow-sm rounded">
            <thead className="bg-success text-white">
              <tr>
                {col.map((e, i) => (
                  <th key={i}>{e}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="table-row">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update/${user.id}`} className="btn btn-success me-2">Update</Link>
                    {/* Delete Button */}
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
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

