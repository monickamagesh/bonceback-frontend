import React from "react";
import Navbar from "./Navbar";
import logo from "../../assets/logo.png";
import SecondaryBtn from "./button/SecondaryBtn";
import { Link } from "react-router-dom";
import ProfileChip from "./ProfileClip";
import { useSelector } from "react-redux";

const TherapistSidebar = () => {
    const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="sidebar bg-white p-6 flex flex-col justify-between h-full w-64 ">
      {/* Logo Section */}
      <div >
        <div className="mb-10">
        <Link to="/therapist/">
          <img className="bblogo mb-8 w-full h-auto object-contain" src={logo} alt="bb logo" />
        </Link>
        </div>
        
        <Navbar />
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center space-y-4 mb-10">
      <ProfileChip className="absolute bottom-0 left-0 w-full" />
        <SecondaryBtn btntext="Logout" icon="logout" />
      </div>
    </div>
  );
};

export default TherapistSidebar;
