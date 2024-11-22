import React, { useContext, useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

const LogIn = () => {
  const { createUserWithGoogle, handleLogin, setUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleGoogle = () => {
    createUserWithGoogle()
      .then((user) => {
        setUser(user.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target;
    const email = value.email.value;
    const password = value.password.value;

    handleLogin(email, password)
      .then((user) => {
        const users = user.user;
        setUser(users);
      })
      .catch((err) => {
        toast("Invalid email or password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="my-7">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
              <div className="mx-auto text-center">
                <button
                  onClick={handleGoogle}
                  className="btn-wide btn border border-gray font-semibold flex items-center gap-2 justify-center text-sky-500 mx-auto mt-9 mb-5"
                >
                  <FaGoogle />
                  Login with Google
                </button>
                ------OR------
              </div>

              <form onSubmit={handleSubmit} className="card-body pt-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className="input relative input-bordered"
                    required
                  />
                  {showPass ? (
                    <FaEyeSlash
                      onClick={() => setShowPass(!showPass)}
                      className="absolute cursor-pointer top-12 right-4"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="absolute cursor-pointer top-12 right-4"
                    />
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className="font-semibold mt-3 text-gray-500">
                  Dont’t Have An Account ?{" "}
                  <Link to="/register" className="text-red-500 font-semibold">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
