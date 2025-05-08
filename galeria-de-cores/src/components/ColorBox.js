import React from 'react';
import './styles.css';
const ColorBox = ({ color, onDelete }) => {
    return (
      <div className="color-box" style={{ backgroundColor: color }}>
        <span>{color}</span>
        <button onClick={onDelete} className="delete-btn">×</button>
      </div>
    );
  };
  
  export default ColorBox;
