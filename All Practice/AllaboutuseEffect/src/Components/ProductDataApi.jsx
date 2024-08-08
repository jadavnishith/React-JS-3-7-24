import React, { useEffect, useState } from "react";

function ProductDataApi() {
  // useState
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  // useEffect

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect is running");
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${userId}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching data!");
      }
    };
    fetchData();

    return () => {
      console.log("Clean up function is called");
    };
  }, [userId]);
  
  return (
    <>
      <div className="container mt-3 text-center py-3 text-bg-dark">
        <h1 className="py-2">Product's</h1>
        {/* bootstrap card */}
{userData &&
        <div
          className="card mt-3"
          style={{
            width: "18rem",
            margin: "0 auto",
            height: "100%",
            backgroundImage:
              "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <div className="text-center">
            <img
              src={userData.image}
              className="card-img-top mt-2 border-1 rounded"
              alt={userData.title}
              style={{
                objectFit: "contain",
                height: "200px",
                width: "200px",
                mixBlendMode: "darken",
              }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{userData.title.slice(0,40)}</h5>
            <p className="card-text">{userData.description.slice(0,80)}</p>
            <a
              href="#"
              className="btn btn-success mt-auto fw-bold"
              style={{ width: "90px" }}
            >
              ₹ {userData.price}
            </a>
          </div>
        </div>
      }

        {/* button previous */}
        <button
          type="button"
          className="btn btn-outline-warning mt-3 me-3"
          onClick={() => setUserId(userId - 1)}
        >
          Previous
        </button>

        {/* button next */}
        <button
          type="button"
          className="btn btn-outline-success mt-3 ms-3"
          onClick={() => setUserId(userId + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ProductDataApi;
