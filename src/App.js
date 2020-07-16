import React, { useRef, useState } from 'react';
import { maskify } from './util/maskify';
import Webcam from './components/Webcam';
import { exportComponentAsPDF } from 'react-component-export-image';
import MouthSelector from './components/MouthSelector';
import NoseSelector from './components/NoseSelector';
import LeftEyeSelector from './components/LeftEyeSelector';
import RightEyeSelector from './components/RightEyeSelector';
import LeftEyeBrowSelector from './components/LeftEyeBrowSelector';
import RightEyeBrowSelector from './components/RightEyeBrowSelector';

export default function App() {
  const [mouth, setMouth] = useState('mouth1');
  const [nose, setNose] = useState('nose1');
  const [leftEye, setLeftEye] = useState('leftEye1');
  const [rightEye, setRightEye] = useState('rightEye1');
  const [leftEyeBrow, setLeftEyeBrow] = useState('leftEyeBrow1');
  const [rightEyeBrow, setRightEyeBrow] = useState('rightEyeBrow1');

  const componentRef = useRef();

  const mouthArray = [
    '/images/mouth1.png',
    '/images/mouth2.png',
    '/images/mouth3.png',
    '/images/mouth4.png',
    '/images/mouth5.png',
    '/images/mouth6.png',
  ];

  const noseArray = [
    '/images/nose1.png',
    '/images/nose2.png',
    '/images/nose3.png',
    '/images/nose4.png',
  ];

  const leftEyeArray = [
    '/images/leftEye1.png',
    '/images/leftEye2.png',
    '/images/leftEye3.png',
    '/images/leftEye4.png',
    '/images/leftEye5.png',
  ];

  const rightEyeArray = [
    '/images/rightEye1.png',
    '/images/rightEye2.png',
    '/images/rightEye3.png',
    '/images/rightEye4.png',
    '/images/rightEye5.png',
  ];

  const leftEyeBrowArray = [
    '/images/leftEyebrow1.png',
    '/images/leftEyebrow2.png',
    '/images/leftEyebrow3.png',
    '/images/leftEyebrow4.png',
    '/images/leftEyebrow5.png',
  ];

  const rightEyeBrowArray = [
    '/images/rightEyebrow1.png',
    '/images/rightEyebrow2.png',
    '/images/rightEyebrow3.png',
    '/images/rightEyebrow4.png',
    '/images/rightEyebrow5.png',
  ];

  const giveMask = () => {
    maskify(
      mouthArray[mouth.slice(-1) - 1],
      noseArray[nose.slice(-1) - 1],
      leftEyeArray[leftEye.slice(-1) - 1],
      rightEyeArray[rightEye.slice(-1) - 1],
      leftEyeBrowArray[leftEyeBrow.slice(-1) - 1],
      rightEyeBrowArray[rightEyeBrow.slice(-1) - 1]
    );
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
      <div style={{ display: 'flex' }}>
        <MouthSelector onChange={(e) => setMouth(e.value)} />
        <NoseSelector onChange={(e) => setNose(e.value)} />
        <LeftEyeSelector onChange={(e) => setLeftEye(e.value)} />
        <RightEyeSelector onChange={(e) => setRightEye(e.value)} />
        <LeftEyeBrowSelector onChange={(e) => setLeftEyeBrow(e.value)} />
        <RightEyeBrowSelector onChange={(e) => setRightEyeBrow(e.value)} />
      </div>
    </div>
  );
}
