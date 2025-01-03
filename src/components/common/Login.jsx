import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import bouncy from "../../assets/bouncy.png";
import logo from "../../assets/logo.png";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      const { token, user } = response;
      dispatch(setUser({ user }));
      alert("Login successful");
      if (user.role === "patient") {
        navigate("/patient/health-assessment/");
      } else if (user.role === "therapist") {
        navigate("/therapist/");
      } else if (user.role === "admin") {
        navigate("/admin/");
      }
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#f3e6fa]">
      <div className="flex w-full max-w-6xl items-center justify-between ">
        <div> <a href="https://bounceback.onrender.com/"> <img src={logo} alt="Logo" className="h-8 md:h-12" /> </a> </div>
        <div className="text-sm" >Don't have an account? <Link to="/role" className="bg-purple-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-purple-700 transition">Sign up</Link></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center  overflow-hidden min-w-xl max-w-6xl gap-10">
        <div className="p-10 w-full lg:w-1/2 bg-white shadow-lg rounded-xl ">
        <div className="text-[32px] font-bold text-[#7700bc]">Welcome Back!</div>
          <p className="text-gray-600 mt-2"> Please login to your account.</p>
          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {message && <p className="text-red-500 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              {loginLoading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="mt-5 text-sm text-center text-gray-600 ">
            Don't have an account?{" "}
            <Link to="/role" className="text-purple-700 underline">
              Register here
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
  );
};

export default Login;
