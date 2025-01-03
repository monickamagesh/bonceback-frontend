import React from "react";
import '../../../pages/patient/selection/byspec.css';
import { Link } from "react-router-dom"

const SpecCard = ({ image, title }) => {
  return (
    <div className="pain-card">
      <img src={image} alt={title} className="pain-image" />
      <h3 className="pain-title">{title}</h3>
      <Link to="top-therapist"><button className="view-btn">View Therapists</button></Link>
    </div>
  );
};

export default SpecCard;
