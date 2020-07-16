import React, { useEffect } from 'react';
import { maskify } from './util/maskify';
import Webcam from './components/Webcam';

export default function App() {
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
      <Webcam />
      <button onClick={giveMask}>maskify me</button>
    </div>
  );
}
