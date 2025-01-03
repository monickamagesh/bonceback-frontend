import React from "react";

const RadioButton = ({ label, name, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="formlabel block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      <div className="radio-group ">
        {options.map((option) => (
          <label key={option.value} className="radio-label ">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};



export default RadioButton;
