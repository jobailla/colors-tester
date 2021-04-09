import React, { useEffect, useState } from 'react';
import { MaterialPicker, SketchPicker } from 'react-color';
import './styles/App.scss';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [colorX, setColorX] = useState("#191645");
  const [colorY, setColorY] = useState("#43C6AC");

  const [zIndexX, setZindeX] = useState(0) 
  const [zIndexY, setZindeY] = useState(1) 

  let styleBg = {
    backgroundColor: bgColor
  };

  const styleX = {
    backgroundColor: colorX,
    zIndex: zIndexX
  }
  const styleY = {
    backgroundColor: colorY,
    zIndex: zIndexY 
  }

  const handleZindex = () => {
    setZindeX(zIndexX === 0 ? 1 : 0)
    setZindeY(zIndexY === 0 ? 1 : 0)
  }

  return (
    <div className="App">
      <div className="App__colors">
        <div className="colorGrid" style={styleBg} >
          <div className="color1" style={styleX} onClick={() => handleZindex()}/>
          <div className="color2" style={styleY} onClick={() => handleZindex()}/>
        </div>
      </div>
      <div className="App__inputs">
        {isMobile ?
          <>
            <MaterialPicker color={bgColor} onChangeComplete={newColor => setBgColor(newColor.hex)} />
            <MaterialPicker color={colorX} onChangeComplete={newColor => setColorX(newColor.hex)} />
            <MaterialPicker color={colorY} onChangeComplete={newColor => setColorY(newColor.hex)} />
          </>
          :
          <>
            <SketchPicker color={bgColor} onChangeComplete={newColor => setBgColor(newColor.hex)} />
            <SketchPicker color={colorX} onChangeComplete={newColor => setColorX(newColor.hex)} />
            <SketchPicker color={colorY} onChangeComplete={newColor => setColorY(newColor.hex)} />
          </>
        }
      </div>
    </div>
  );
}

export default App;