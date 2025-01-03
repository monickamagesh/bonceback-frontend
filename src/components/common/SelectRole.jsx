import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patient from '../../assets/patient-role.png';
import therapist from '../../assets/therapist-role.png';

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  // Handle role selection and navigate to registration page
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    navigate(`/register/${role}`); // Navigate and pass the role as a URL parameter
  };

  return (
    <section className="flex flex-col items-center py-16 min-h-screen bg-[#f3e6fa]">
      <div className="text-[52px] font-bold text-[#7700bc]">Select Your Role</div>

      <div className="text-base text-gray-600 text-center mb-4 max-w-lg mx-auto">
        <p className="leading-relaxed">
          This step is part of the registration process. Please select your role below to proceed and join the bounceback.
        </p>
      </div>
      <div className="flex space-x-12 max-w-4xl mx-auto">
        {/* Therapist Role */}
        <div
          className="flex flex-col items-center bg-transparent p-6 transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => handleRoleSelection('therapist')} // Handle click for therapist
        >
          <img
            src={therapist}
            alt="Therapist"
            className="w-[360px] object-cover rounded-lg"
          />
          <div className="text-2xl font-medium text-gray-700 mt-4">Therapist</div>
        </div>

        {/* Patient Role */}
        <div
          className="flex flex-col items-center bg-transparent p-6 transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => handleRoleSelection('patient')} // Handle click for patient
        >
          <img
            src={patient}
            alt="Patient"
            className="w-[360px] object-cover rounded-lg"
          />
          <div className="text-2xl font-medium text-gray-700 mt-4">Patient</div>
        </div>
      </div>
    </section>
  );
}

export default SelectRole;
