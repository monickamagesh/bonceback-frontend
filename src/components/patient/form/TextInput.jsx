import React from 'react'
import "../../../pages/patient/form/HealthAssessment.css"

const TextInput = ({label, name, type="text", value, onChange, placeholder}) => {
  return (
    <div>
        <label htmlFor={name} className='block text-sm font-medium text-gray-700 formlabel'>{label}</label>
        <input type={type} name={name} id={name} placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=' mt-2 p-3 w-full border bg-[#f0f0f0] hover:bg-primary-light-active hover:placeholder-gray-600 focus:placeholder-text-light rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#A4A4A4] focus:bg-white transition-all duration-300'
        />
        
    </div>
  )
}

export default TextInput