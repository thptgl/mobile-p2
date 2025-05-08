import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './styles.css';

const ColorPalette = () => {
  const [colors, setColors] = useState([
    '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3'
  ]);
  const [newColor, setNewColor] = useState('#000000');

  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter(color => color !== colorToRemove));
  };

  return (
    <div className="palette-container">
      <h1>Galeria de Cores Interativa</h1>
      <div className="color-input">
        <input 
          type="color" 
          value={newColor} 
          onChange={(e) => setNewColor(e.target.value)} 
        />
        <button onClick={addColor}>Adicionar Cor</button>
      </div>
      <div className="colors-grid">
        {colors.map((color, index) => (
          <ColorBox 
            key={index} 
            color={color} 
            onDelete={() => removeColor(color)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;