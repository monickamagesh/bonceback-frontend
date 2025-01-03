import React from "react";

const CheckboxButton = ({ label, name, options, selectedValues, onChange }) => {
  console.log("selectedValues:", selectedValues); 
  const handleChange = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((val) => val !== value) 
      : [...selectedValues, value]; 
    onChange(newSelectedValues);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className=" formlabel block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label ">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <span className="checkbox-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};



export default CheckboxButton;
