import React, { useRef } from 'react';
import { maskify } from './util/maskify';
import Webcam from './components/Webcam';
import { exportComponentAsPDF } from 'react-component-export-image';
import ImgSelector from './components/ImgSelector';

export default function App() {
  const componentRef = useRef();

  const giveMask = () => {
    maskify([
      '/images/overlay-blue-monster.png',
      '/images/overlay-clown.png',
      '/images/overlay-frankenstein.png',
      '/images/overlay-pumpkin.png',
      '/images/overlay-red-monster.png',
      '/images/overlay-skull.png',
      '/images/overlay-vampire.png',
      '/images/overlay-werewolf.png',
    ]);
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
      <ImgSelector />
    </div>
  );
}
