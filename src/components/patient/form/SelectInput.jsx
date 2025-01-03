import React from 'react';

const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={name} className='formlabel block text-sm font-medium text-gray-700'>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange} // handle change event
        className=' mt-2 p-3 w-full border bg-[#f0f0f0] hover:bg-primary-light-active  hover:placeholder-gray-600 focus:placeholder-text-light rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#A4A4A4] focus:bg-white transition-all duration-300'
      >
        <option value="" disabled>Select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}


export default SelectInput;
