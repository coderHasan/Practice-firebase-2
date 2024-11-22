import React, { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/Provider/AuthProvider";

const NavBar = () => {
  const { user, handleSighOut } = useContext(AuthContext);

  return (
    <header className="sticky z-10 bg-white backdrop-blur-md top-0">
      <div className="">
        <div className="container mx-auto px-3 md:px-5 py-2">
          <div>
            <nav>
              <div className="navbar  ">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <Link to="/">Home</Link>
                      <Link to="/campaigns">Donation Campaigns </Link>
                      <Link to="/">How to Help</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </ul>
                  </div>
                  <Link to="/" className="btn btn-ghost text-2xl">
                    Cloth-Giving
                  </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 flex gap-5 text-xl">
                    <Link to="/">Home</Link>
                    <Link to="campaigns">Donation Campaigns </Link>
                    <Link to="help">How to Help</Link>
                    <Link to="/dashboard">Dashboard</Link>
                  </ul>
                </div>
                <div className="navbar-end">
                  {user && user?.email ? (
                    <Link
                      onClick={handleSighOut}
                      className="btn text-xl font-medium"
                    >
                      <div className="w-[40px] h-[40px] rounded-full">
                        <img
                          className="w-full h-full rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      </div>
                      Log-Out
                    </Link>
                  ) : (
                    <Link to="/login" className="btn text-xl font-medium">
                      <FaUser size={22} />
                      LogIn
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
