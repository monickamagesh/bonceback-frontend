import React from "react";
import TherapistCard from "../../../components/patient/selection/TherapistCard";
import g1 from "../../../assets/therapist/g1.jpg"
import g2 from "../../../assets/therapist/g2.jpg"
import g3 from "../../../assets/therapist/g3.jpg"
import g4 from "../../../assets/therapist/g4.png"
import g5 from "../../../assets/therapist/g5.png"
import g6 from "../../../assets/therapist/g6.jpeg"
import b1 from "../../../assets/therapist/b1.jpg"
import b2 from "../../../assets/therapist/b2.jpg"
import b3 from "../../../assets/therapist/b3.jpg"
import b4 from "../../../assets/therapist/b4.png"
import b5 from "../../../assets/therapist/b5.jpg"
import b6 from "../../../assets/therapist/b6.jpg"

const TopTherapist = () => {
  const therapists = [
    {
      name: "Dr. Hira Nandhini",
      specialization: "Neurological Physical Therapist",
      rating: 4.0,
      image: g2,
    },
    {
      name: "Dr. Dipu Karunan",
      specialization: "Orthopedic Physical Therapist",
      rating: 4.0,
      image: b1,
    },
    {
      name: "Dr. Vignesh Prabhas",
      specialization: "Hand & Health Physical Therapist",
      rating: 4.0,
      image: b4,
    },
    {
      name: "Dr. Diti V Jain",
      specialization: "Sports Physical Therapist",
      rating: 4.0,
      image: g6,
    },
    {
      name: "Dr. Monicka Magesh",
      specialization: "Pediatric Physical Therapist",
      rating: 4.0,
      image: g4,
    },
    {
      name: "Dr. Ram Charan",
      specialization: "General Physical Therapist",
      rating: 3.0,
      image: b3,
    },
    {
      name: "Dr. John Peterson",
      specialization: "Lymphatic Physical Therapist",
      rating: 3.0,
      image: b2,
    },
    {
      name: "Dr. Sonali Raikar",
      specialization: "Respiratory Physical Therapist",
      rating: 3.0,
      image: g3,
    },
    {
      name: "Dr. Vizhi Prabha",
      specialization: "Cardiovascular Physical Therapist",
      rating: 3.0,
      image: g5,
    },
    {
      name: "Dr. Rohit Chawla",
      specialization: "Workplace Physical Therapist",
      rating: 3.0,
      image: b5,
    },
    {
      name: "Dr. Kat Mach",
      specialization: "Women’s Health Physical Therapist",
      rating: 3.0,
      image: g1,
    },
    {
      name: "Dr. Anurag Krishna",
      specialization: "Geriatric Physical Therapist",
      rating: 3.0,
      image: b6,
    },
  ];

  return (
    <div className="w-[1080px] mx-auto bg-white border rounded-xl mb-32">
      <div className="flex w-2/3 mx-auto py-8 justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Top Rated Therapists
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium text-gray-600">page 01/24</div>
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">
            Prev
          </button>
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-[96px]">
        {therapists.map((therapist, index) => (
          <TherapistCard
            key={index}
            name={therapist.name}
            specialization={therapist.specialization}
            rating={therapist.rating}
            image={therapist.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTherapist;
