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

  const [zIndex, setZindex] = useState({ x: 0, y: 1 })
  const [colors, setColors] = useState({ background: "#FFFFFF", x: "#191645", y: "#43C9AC" })

  let style = {
    background: {
      backgroundColor: colors.background
    },
    x: {
      backgroundColor: colors.x,
      zIndex: zIndex.x

    },
    y: {
      backgroundColor: colors.y,
      zIndex: zIndex.y
    }
  }

  const handleZindex = () => {
    setZindex({ ...zIndex, x: zIndex.x ^= 1, y: zIndex.y ^= 1 })
  }

  return (
    <div className="App">
      <div className="App__colors">
        <div className="colorGrid" style={style.background} >
          <div className="color1" style={style.x} onClick={() => handleZindex()} />
          <div className="color2" style={style.y} onClick={() => handleZindex()} />
        </div>
      </div>
      <div className="App__inputs">
        {isMobile ?
          <>
            <MaterialPicker color={colors.background} onChange={newColor => setColors({ ...colors, background: newColor.hex })} />
            <MaterialPicker color={colors.x} onChange={newColor => setColors({ ...colors, x: newColor.hex })} />
            <MaterialPicker color={colors.y} onChange={newColor => setColors({ ...colors, y: newColor.hex })} />
          </>
          :
          <>
            <SketchPicker color={colors.background} onChange={newColor => setColors({ ...colors, background: newColor.hex })} />
            <SketchPicker color={colors.x} onChange={newColor => setColors({ ...colors, x: newColor.hex })} />
            <SketchPicker color={colors.y} onChange={newColor => setColors({ ...colors, y: newColor.hex })} />
          </>
        }
      </div>
    </div>
  );
}

export default App;