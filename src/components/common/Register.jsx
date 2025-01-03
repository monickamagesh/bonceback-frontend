import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
import bouncy from "../../assets/bouncy.png";
import logo from "../../assets/logo.png";

const Register = () => {
  const { role } = useParams();
  console.log("Role from params:", role);

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { ...formData, role };
    try {
      await registerUser(data).unwrap();
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <>
      
      <section className="h-screen flex flex-col items-center justify-center bg-[#f3e6fa]">
        <div className="flex w-full max-w-6xl items-center justify-between ">
          <div>
            {" "}
            <a href="https://bounceback.onrender.com/">
              {" "}
              <img src={logo} alt="Logo" className="h-8 md:h-12" />{" "}
            </a>{" "}
          </div>
          <div className="text-sm">
          Already part of Bounceback?{" "}
            <Link
              to="/"
              className="bg-purple-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center  overflow-hidden min-w-xl max-w-6xl gap-10">
          <div className="p-10 w-full lg:w-1/2 bg-white shadow-lg rounded-xl ">
            <div className="text-[32px] font-bold text-[#7700bc]">
            Seconds to sign up!
            </div>
            <p className="text-gray-600 mt-2"> Please signup to create new account.</p>
            <form onSubmit={handleRegister} className="mt-6 space-y-5">
              <input
                type="text"
                name="username"
                onChange={handleInputChange}
                placeholder="Username"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {message && <p className="text-red-500">{message}</p>}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Register
              </button>
            </form>
            <p className="mt-5 text-sm text-center text-gray-600 ">
            Already part of Bounceback?{" "}
              <Link to="/" className="text-purple-700 underline">
                Login here
              </Link>
              .
            </p>
          </div>
          <img
            src={bouncy}
            alt="Therapist"
            className="w-[500px] lg:w-1/2 h-72 lg:h-auto object-fill"
          />
        </div>
      </section>
    </>
  );
};

export default Register;
