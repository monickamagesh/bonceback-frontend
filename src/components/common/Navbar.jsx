import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import PrimaryBtn from "./button/PrimaryBtn";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Navigation items based on user roles
  const therapistNav = [
    { path: "/therapist/patient-analytic", txt: "Patients' Analytics", icon: "analytics" },
    { path: "/therapist/regimens", txt: "Regimens", icon: "Edit" },
    { path: "/therapist/chat", txt: "Message", icon: "chat" },
    { path: "/therapist/notification", txt: "Notifications", icon: "notifications" },
    { path: "/therapist/resource-library", txt: "Resource Library", icon: "local_library" },
  ];
  const patientNav = [
    { path: "/patient/progress", txt: "Progress Tracker", icon: "offline_bolt" },
    { path: "/patient/chat", txt: "Message", icon: "chat" },
    { path: "/patient/notification", txt: "Notifications", icon: "notifications" },
    { path: "/patient/resource-library", txt: "Resource Library", icon: "local_library" },
    { path: "/patient/analytic", txt: "Analytics", icon: "analytics" },
  ];
  const adminNav = [
    { path: "/admin/users", txt: "Manage Users", icon: "group" },
    { path: "/admin/reports", txt: "Reports", icon: "assessment" },
  ];

  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Determine navigation items based on user role
  let navItems = [];
  if (user.role === "therapist") {
    navItems = therapistNav;
  } else if (user.role === "patient") {
    navItems = patientNav;
  } else if (user.role === "admin") {
    navItems = adminNav;
  }

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <NavLink to={item.path} key={index} className="nav-link">
          <PrimaryBtn btntext={item.txt} icon={item.icon} />
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
