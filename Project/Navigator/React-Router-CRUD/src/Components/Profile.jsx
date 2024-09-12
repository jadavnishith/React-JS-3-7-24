import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  let profileMap = [1, 2, 3, 4, 5];
  return (
    <div className="container text-bg-dark mt-3 mb-3 p-5">
      <div className="row">
        {profileMap.map((profile) => (
          <NavLink
            key={profile}
            to={`/profile/${profile}`}
            className={(e) => (e.isActive ? "blue" : "")}
          >
            Profile : {profile}
          </NavLink>
          // console.log(profile)
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
