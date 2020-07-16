import React, { useRef, useState } from 'react';
import { maskify } from './util/maskify';
import Webcam from './components/Webcam';
import { exportComponentAsPDF } from 'react-component-export-image';
import MouthSelector from './components/MouthSelector';

export default function App() {
  const [mouth, setMouth] = useState('mouth1');
  console.log(mouth.slice(-1));
  const componentRef = useRef();

  const mouthArray = [
    '/images/mouth1.png',
    '/images/mouth2.png',
    '/images/mouth3.png',
    '/images/mouth4.png',
    '/images/mouth5.png',
    '/images/mouth6.png',
  ];

  const giveMask = () => {
    maskify(mouthArray[mouth.slice(-1) - 1]);
  };

  return (
    <div>
      <div ref={componentRef}>
        <Webcam />
      </div>
      <button onClick={giveMask}>maskify me</button>
      <button
        className="pdf-btn"
        onClick={() => exportComponentAsPDF(componentRef)}
      >
        Export As PDF
      </button>
      <MouthSelector onChange={(e) => setMouth(e.value)} />
    </div>
  );
}
