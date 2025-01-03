import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Home = () => {
  // show user if logged in
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-500">
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md text-gray-700 ">
        <nav className="flex items-center justify-between px-10 py-3 max-w-full">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 md:h-12" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/shop" className="hover:text-primary-normal-active hover:font-medium">
              Our services
            </Link>
            <Link to="/about" className="hover:text-primary-normal-active hover:font-medium">
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-normal-active hover:font-medium"
            >
              Contact
            </Link>
          </div>

          {/* nav icons */}
          <button
            onClick={() => navigate("/login")}
            className="bg-primary-normal-active hover:bg-opacity-90 rounded-md px-4 py-2 text-primary-light hover:text-white font-normal"
          >
            Login
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Home;
