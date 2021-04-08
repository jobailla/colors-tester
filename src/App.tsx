import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './styles/App.scss';

function App() {
  const [bgColor, setBgColor] = useState("#008080");
  const [colorX, setColorX] = useState("#209CE8");
  const [colorY, setColorY] = useState("#9040F7");
  let divStyle = { backgroundColor: bgColor };

    const styleX = {
        backgroundColor: colorX
    }
    const styleY = {
        backgroundColor: colorY
    }

  return (
    <div className="App" style={divStyle}>
      <div className="App__colors">
            <div className="colorGrid">
            <div className="color1" style={styleX} />
            <div className="color2" style={styleY} />
        </div>
      </div>
      <div className="App__inputs">
        <ChromePicker color={bgColor} onChangeComplete={newColor => setBgColor(newColor.hex)} />
        <ChromePicker color={colorX} onChangeComplete={newColor => setColorX(newColor.hex)} />
        <ChromePicker color={colorY} onChangeComplete={newColor => setColorY(newColor.hex)} />
      </div>
    </div>
  );
}

export default App;