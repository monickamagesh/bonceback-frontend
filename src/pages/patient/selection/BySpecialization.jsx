import React from 'react'
import '../../../pages/patient/selection/byspec.css'

import SpecCard from '../../../components/patient/selection/SpecializationCard';

import opt from "../../../assets/byspec/opt.jpg"
import npt from "../../../assets/byspec/npt.jpg"
import ppt from "../../../assets/byspec/ppt.jpg"
import cpt from "../../../assets/byspec/cpt.jpg"
import spt from "../../../assets/byspec/spt.jpg"
import gpt from "../../../assets/byspec/gpt.jpg" 
import onpt1 from "../../../assets/byspec/onpt1.jpg"
import wpt from "../../../assets/byspec/wpt.jpg"
import phpt from "../../../assets/byspec/phpt.jpg"
import rpt from "../../../assets/byspec/rpt.jpg"
import wcpt from "../../../assets/byspec/wcpt.jpg"
import lpt from "../../../assets/byspec/lpt.jpg"

const specData = [
  { image: opt , title: "Orthopedic Physical Therapy" },
  { image: npt , title: "Neurological Physical Therapy" },
  { image: ppt , title: "Pediatric Physical Therapy" },
  { image: cpt , title: "Cardiopulmonary Physical Therapy" },
  { image: spt , title: "Sports Physical Therapy" },
  { image: gpt , title: "Geriatric Physical Therapy" }, 
  { image: onpt1 , title: "Oncological Physical Therapy" },
  { image: wpt , title: "Women's Health Physical Therapy" },
  { image: phpt , title: "Pelvic Health Physical Therapy" },
  { image: rpt , title: "Respiratory Physical Therapy" },
  { image: wcpt , title: "Wound Care Physical Therapy" },
  { image: lpt, title: "Lymphedema Physical Therapy" },
];

const BySpec = () => {
  return (
    <div className="by-pain-container">
      <div className="by-pain-card">
        <div className="by-pain-header">
          
          <h1 className="text-3xl font-bold text-gray-900">
          By Specialization
        </h1>
          <div className="filter-buttons">
            <button className="filter-btn">Pain</button>
            <button className="filter-btn active">Specialization</button>
            <button className="filter-btn">All</button>
          </div>
        </div>
        
        <div className="pain-grid">
          {specData.map((pain, index) => (
            <SpecCard key={index} image={pain.image} title={pain.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BySpec;