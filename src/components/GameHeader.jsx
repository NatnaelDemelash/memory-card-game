import React from 'react';

const GameHeader = () => {
  return (
    <div className="mx-8 mt-10">
      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md rounded-md px-6 py-4 mb-8">
        <h1 className="text-3xl font-semibold text-center">
          🎮 Memory Card Game
        </h1>
        <div className="flex justify-between items-center mt-12 mx-8 md:mx-12">
          <div className="flex flex-col space-y-3 text-center">
            <span>Current Score</span>
            <span className="font-bold text-2xl">0</span>
          </div>

          <div className="flex flex-col space-y-3 text-center">
            <span>Total Moves</span>
            <span className="font-bold text-2xl">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
