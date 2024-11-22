import React, { useContext } from "react";
import { AuthContext } from "../utils/Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container px-3 md:px-5 py-9">
      <div>
        <div className="hero flex items-center px-5 justify-between bg-base-200 ">
          {user && (
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={user.photoURL}
                className="max-w-sm rounded-full object-cover shadow-2xl"
              />
              <div>
                <h1 className="text-xl font-bold">{user.displayName}</h1>
                <p className="">{user.email}</p>
              </div>
            </div>
          )}
          <button className="btn btn-accent">
            Update <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
