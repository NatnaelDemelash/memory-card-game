import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';

const GameHeader = () => {
  const handleNewGame = () => {
    console.log('Starting a new game!');
    // Actual game logic (resetting state, shuffling cards) would go here
  };

  return (
    <div className="mx-4 sm:mx-8 mt-12 mb-8">
      <Card className="max-w-lg lg:max-w-xl mx-auto bg-white border-4 border-black shadow-2xl shadow-black/70 px-6 py-6 sm:px-8 sm:py-8 rounded-lg">
        <CardContent className="p-0">
          <h1 className="text-4xl font-extrabold uppercase tracking-wider text-center text-black mb-10">
            Memory Match
          </h1>

          <div className="flex justify-around items-center w-full">
            <div className="flex flex-col items-center p-3 sm:p-4 border-2 border-black rounded-md bg-gray-100/80 min-w-[120px] shadow-md shadow-black/40">
              <span className="text-sm sm:text-base font-medium uppercase text-gray-700">
                Score
              </span>
              <span className="font-extrabold text-3xl sm:text-4xl text-black mt-1">
                0
              </span>
            </div>

            <div className="h-10 w-px bg-black opacity-30 mx-4"></div>

            <div className="flex flex-col items-center p-3 sm:p-4 border-2 border-black rounded-md bg-gray-100/80 min-w-[120px] shadow-md shadow-black/40">
              <span className="text-sm sm:text-base font-medium uppercase text-gray-700">
                Moves
              </span>
              <span className="font-extrabold text-3xl sm:text-4xl text-black mt-1">
                0
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              onClick={handleNewGame}
              className="h-14 w-1/2 bg-white text-black 
                           border-2 border-black rounded-md 
                           shadow-lg shadow-black/60 hover:bg-gray-100 
                           transition-all duration-200 
                           text-lg font-bold uppercase tracking-wider cursor-pointer"
              variant="outline"
            >
              <RotateCw className="mr-3 h-5 w-5" />
              New Game
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameHeader;
