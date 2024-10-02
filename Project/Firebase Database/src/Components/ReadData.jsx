// import { child, get, getDatabase, ref } from "firebase/database";
// import React, { useState } from "react";
// import app from "../firebase";

// function ReadData() {
//   const [userArray, setUserArray] = useState([]);

//   const dispData = async () => {
//     const dbRef =  ref(getDatabase(app));
//     await get(child(dbRef, `details/users`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         setUserArray(Object.values(snapshot.val()))
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Read Data</h1>
//         <button className="btn btn-primary" onClick={dispData}>
//           Display Data
//         </button>
//         <ul>
//           {userArray.map((e, i) => {
//             return (
//               <li key={i}>
//                 {e.firstName} {e.lastName}
//                 <button className="btn btn-success" >Edit</button>
//                 <button className="btn btn-danger">Delete</button>
//               </li>

//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ReadData;

// import { child, get, getDatabase, ref, remove, set } from "firebase/database";
// import React, { useState } from "react";
// import app from "../firebase";

// function ReadData() {
//   const [userArray, setUserArray] = useState([]);
//   const [editData, setEditData] = useState({ firstName: '', lastName: '', key: '' });

//   const dispData = async () => {
//     const dbRef = ref(getDatabase(app));
//     await get(child(dbRef, `details/users`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         setUserArray(Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, key })));
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   };

//   const handleEdit = (user) => {
//     setEditData(user);
//   };

//   const saveEdit = async () => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, `details/users/${editData.key}`);
//     await set(dbRef, {
//       firstName: editData.firstName,
//       lastName: editData.lastName,
//     });
//     setEditData({ firstName: '', lastName: '', key: '' });
//     dispData(); // Refresh data
//   };

//   const handleDelete = async (key) => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, `details/users/${key}`);
//     await remove(dbRef);
//     dispData(); // Refresh data
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Read Data</h1>
//         <button className="btn btn-primary" onClick={dispData}>
//           Display Data
//         </button>
//         <ul>
//           {userArray.map((e) => {
//             return (
//               <li key={e.key}>
//                 {e.firstName} {e.lastName}
//                 <button className="btn btn-success" onClick={() => handleEdit(e)}>Edit</button>
//                 <button className="btn btn-danger" onClick={() => handleDelete(e.key)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//         {editData.key && (
//           <div>
//             <h2>Edit User</h2>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={editData.firstName}
//               onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={editData.lastName}
//               onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
//             />
//             <button onClick={saveEdit}>Save Changes</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ReadData;


// import { child, get, getDatabase, ref, remove } from "firebase/database";
// import React, { useState } from "react";
// import app from "../firebase";
// import { useNavigate } from "react-router-dom";

// function ReadData() {
//   const [userArray, setUserArray] = useState([]);
//   const navigate = useNavigate();

//   const dispData = async () => {
//     const dbRef = ref(getDatabase(app));
//     await get(child(dbRef, `details/users`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         setUserArray(Object.entries(snapshot.val()).map(([key, value]) => ({ ...value, key })));
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   };

//   const handleDelete = async (key) => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, `details/users/${key}`);
//     await remove(dbRef);
//     dispData(); // Refresh data
//   };

//   return (
//     <div className="container">
//       <h1>Read Data</h1>
//       <button className="btn btn-primary" onClick={dispData}>
//         Display Data
//       </button>
//       <ul>
//         {userArray.map((e) => {
//           return (
//             <li key={e.key}>
//               {e.firstName} {e.lastName}
//               <button className="btn btn-success" onClick={() => navigate(`/edit/${e.key}`)}>Edit</button>
//               <button className="btn btn-danger" onClick={() => handleDelete(e.key)}>Delete</button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default ReadData;


import { child, get, getDatabase, ref, remove } from "firebase/database";
import React, { useState } from "react";
import app from "../firebase";
import { useNavigate } from "react-router-dom";
// import './ReadData.css'; // Custom CSS file for additional styling

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
