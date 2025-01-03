import React from "react";
import '../../../pages/patient/selection/byspec.css';

const SpecCard = ({ image, title }) => {
  return (
    <div className="pain-card">
      <img src={image} alt={title} className="pain-image" />
      <h3 className="pain-title">{title}</h3>
      <button className="view-btn">View Therapists</button>
    </div>
  );
};

export default SpecCard;