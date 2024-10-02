// import React, { useEffect, useState } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import app from "../firebase";
// import { useNavigate, useParams } from "react-router-dom";

// function EditData() {
//   const { id } = useParams(); // Get user ID from URL
//   const navigate = useNavigate();
  
//   const [userData, setUserData] = useState({ firstName: '', lastName: '' });

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = getDatabase(app);
//       const dbRef = ref(db, `details/users/${id}`);
//       const snapshot = await get(dbRef);
//       if (snapshot.exists()) {
//         setUserData(snapshot.val());
//       }
//     };
//     fetchData();
//   }, [id]);

//   const saveEdit = async () => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, `details/users/${id}`);
//     await set(dbRef, userData);
//     navigate("/read"); // Redirect back to ReadData component
//   };

//   return (
//     <div className="container">
//       <h1>Edit User</h1>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={userData.firstName}
//         onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={userData.lastName}
//         onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
//       />
//       <button onClick={saveEdit}>Save Changes</button>
//     </div>
//   );
// }

// export default EditData;

import React, { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
// import './EditData.css'; // Custom CSS file for additional styling

function EditData() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, `details/users/${id}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
    };
    fetchData();
  }, [id]);

  const saveEdit = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `details/users/${id}`);
    await set(dbRef, userData);
    navigate("/read"); // Redirect back to ReadData component
  };

  return (
    <div className="container text-bg-dark p-5 rounded shadow-lg">
      <h1 className="text-center mb-4">Edit User</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-3"
          placeholder="First Name"
          value={userData.firstName}
          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Last Name"
          value={userData.lastName}
          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-success btn-lg" onClick={saveEdit}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditData;

