import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";

export default function ProfileChip() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    
      <div className="profile_chip">
        <img className="avatar" src={avatar} alt="avatar" />
        <p className="username">@{user.username}</p>
      </div>

  );
}
