import { child, get, getDatabase, ref, remove } from "firebase/database";
import React, { useState } from "react";
import app from "../firebase";
import { useNavigate } from "react-router-dom";


function ReadData() {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  const dispData = async () => {
    const dbRef = ref(getDatabase(app));
    await get(child(dbRef, `details/users`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserArray(Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, key })));
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleDelete = async (key) => {
    const db = getDatabase(app);
    const dbRef = ref(db, `details/users/${key}`);
    await remove(dbRef);
    dispData(); // Refresh data
  };

  const writeData = () => {
    navigate('/')
  }
  return (
    <div className="container">
      <h1 className="text-center mb-4">Read Data</h1>
      <div className="text-center mb-4">
        <button className="btn btn-primary btn-lg" onClick={dispData}>
          Display Data
        </button>
        <button className="btn btn-primary btn-lg ms-2" onClick={writeData}>
          Write Data
        </button>
      </div>
      <ul className="list-group">
        {userArray.map((e) => (
          <li key={e.key} className="list-group-item d-flex justify-content-between align-items-center">
            {e.firstName} {e.lastName}
            <div>
              <button className="btn btn-success me-2" onClick={() => navigate(`/edit/${e.key}`)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(e.key)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadData;
