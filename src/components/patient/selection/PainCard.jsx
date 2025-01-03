import React from "react";
import '../../../pages/patient/selection/bypain.css';

const PainCard = ({ image, title }) => {
  return (
    <div className="pain-card">
      <img src={image} alt={title} className="pain-image" />
      <h3 className="pain-title">{title}</h3>
      <button className="view-btn">View Therapists</button>
    </div>
  );
};

export default PainCard;