// bypain.jsx
import React from "react";
import '../../../pages/patient/selection/bypain.css';

import PainCard from "../../../components/patient/selection/PainCard"

import backpain from "../../../assets/bypain/backpain.jpg"
import neckpain from "../../../assets/bypain/neckpain.jpg"
import kneepain from "../../../assets/bypain/kneepain.jpg"
import shoulderpain from "../../../assets/bypain/shoulderpain.jpg"
import sportinjuries from "../../../assets/bypain/sportinjuries.jpg"
import arithitirispain from "../../../assets/bypain/arithitirispain.jpg"
import pspain from "../../../assets/bypain/pspain.jpg"
import jointpain from "../../../assets/bypain/jointpain.jpg"
import spinalpain from "../../../assets/bypain/spinalpain.jpg"
import pediatricpain from "../../../assets/bypain/pediatricpain.jpg"
import postpartumpain from "../../../assets/bypain/postpartumpain.jpg"
import chronicpain from "../../../assets/bypain/chronicpain.jpg"


const painData = [
  { image: backpain , title: "Back Pain" },
  { image: neckpain, title: "Neck Pain" },
  { image: kneepain, title: "Knee Pain" },
  { image: shoulderpain, title: "Shoulder Pain" },
  { image: sportinjuries, title: "Sports Injuries" },
  { image: arithitirispain, title: "Arthritis Pain" },
  { image: pspain, title: "Post-Surgical Pain" },
  { image: jointpain, title: "Joint Pain" },
  { image: spinalpain, title: "Spinal Pain" },
  { image: pediatricpain, title: "Pediatric Pain" },
  { image: postpartumpain, title: "Postpartum Pain" },
  { image: chronicpain, title: "Chronic Pain" },
];

const ByPain = () => {
  return (
    <div className="by-pain-container">
       <div className="by-pain-card">
        <div className="by-pain-header">
          
          <h1 className="text-3xl font-bold text-gray-900">
          By Pain
        </h1>
          <div className="filter-buttons">
            <button className="filter-btn active">Pain</button>
            <button className="filter-btn">Specialization</button>
            <button className="filter-btn">All</button>
          </div>
        </div>
        
        <div className="pain-grid">
          {painData.map((pain, index) => (
            <PainCard key={index} image={pain.image} title={pain.title} />
          ))}
        </div>
      </div> 
    </div>
  );
};


export default ByPain;