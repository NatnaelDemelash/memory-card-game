import React, { useState } from 'react';
import GameHeader from './components/GameHeader';

import angular from './asset/angular.png';
import box from './asset/box.png';
import laravel from './asset/laravel.png';
import google from './asset/google.png';
import node from './asset/node.png';
import mastercard from './asset/mastercard.png';
import reacct from './asset/react.png';
import opensource from './asset/opensource.png';
import swift from './asset/swift.png';
import slack from './asset/slack.png';

export const cardValues = [
  box,
  angular,
  laravel,
  google,
  node,
  mastercard,
  reacct,
  opensource,
  swift,
  slack,
];

const HomePage = () => {
  // Duplicate and shuffle cards for memory game
  const [cards] = useState(() =>
    [...cardValues, ...cardValues].sort(() => Math.random() - 0.5)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <GameHeader />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <img src={card} alt="Card" className="h-18 w-18 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
