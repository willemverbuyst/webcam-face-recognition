import React, { useEffect } from 'react';
import { maskify } from './util/maskify';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="item">
      <img
        id="womanInRed"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
        alt="A woman wearing a red sweater."
      />
    </div>
  );
}
