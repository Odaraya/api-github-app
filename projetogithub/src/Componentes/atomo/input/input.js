import React from "react";
import'./input.css';

const Input = ({ type, placeholder, value, onChange }) => {
  return (

    <input className='input--container'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;