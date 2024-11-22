import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/Provider/AuthProvider";
import { Bounce, toast, Zoom } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { handleRegister, setUser, updateUserProfile, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigat = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target;
    const name = value.name.value;
    const photo = value.photo.value;
    const email = value.email.value;
    const password = value.password.value;
    const checkPassWord = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (checkPassWord.test(password)) {
      handleRegister(email, password).then((user) => {
        const users = user.user;
        updateUserProfile(name, photo);
        setUser(users);
        navigat(location?.state ? location.state : "/");
      });
      toast.success(` You have successfully created an account.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    } else {
      toast.error(
        ` Must have an Uppercase letter in the password 
          Must have a Lowercase letter in the password  
          Length must be at least 6 character `,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="my-7">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Enter your photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered w-full relative"
                      required
                    />
                    {showPass ? (
                      <FaEyeSlash
                        onClick={() => setShowPass(!showPass)}
                        className="absolute cursor-pointer top-4 right-4"
                      />
                    ) : (
                      <FaEye
                        onClick={() => setShowPass(!showPass)}
                        className="absolute cursor-pointer top-4 right-4"
                      />
                    )}
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>

                <p className="font-semibold mt-3 text-gray-500">
                  Have An Account ?{" "}
                  <Link to="/login" className="text-red-500 font-semibold">
                    LogIn
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

export default Register;
