import React from "react";

const SliderInput = ({ label, min, max, value, onChange, step = 1 }) => {
  return (
    <div className="slider-group">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="number-box"
      />
    </div>
  );
};

export default SliderInput;
