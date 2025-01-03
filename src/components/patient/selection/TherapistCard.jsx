import React from "react";

const TherapistCard = ({ name, specialization, rating, image }) => {
  return (
    <div className="max-w-[280px] p-4 bg-white rounded-lg border border-purple-500 flex flex-col items-center gap-4">
      <img
        className="w-full h-60 rounded-lg object-cover"
        src={image}
        alt={name}
      />
      <div className="w-full flex flex-col items-start gap-2">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{specialization}</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-full flex flex-col justify-start gap-4">
        <div className="flex items-center gap-1">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <svg 
              key={index} 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              className="w-5 h-5 text-yellow-500" 
              viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.571L24 9.75l-6 5.849L19.335 24 12 20.151 4.665 24 6 15.599 0 9.75l8.332-1.592z" />
            </svg>
          ))}
        </div>
          <div className="text-lg font-medium text-gray-900">{rating.toFixed(1)}</div>
        </div>
        <button className="px-4 py-1 text-nowrap bg-[#F3E6FA] text-[#6A00A7] rounded-lg border border-1 border-[#6A00A7] ">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TherapistCard;


 