import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { RotateCcw } from 'lucide-react';

export default function GameHeader() {
  return (
    <div className="mx-4 mt-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/60 backdrop-blur-lg shadow-xl border-none rounded-2xl p-6">
          <CardContent className="p-0">
            <h1 className="text-4xl font-extrabold text-center tracking-tight drop-shadow-sm">
              🎮 Memory Card Game
            </h1>

            <div className="grid grid-cols-2 gap-6 mt-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-md"
              >
                <span className="text-gray-700 text-sm uppercase tracking-wide">
                  Current Score
                </span>
                <p className="font-extrabold text-3xl mt-2">0</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-md"
              >
                <span className="text-gray-700 text-sm uppercase tracking-wide">
                  Total Moves
                </span>
                <p className="font-extrabold text-3xl mt-2">0</p>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                className="bg-black text-white hover:bg-gray-900 font-bold px-6 py-5 rounded-lg shadow-md flex items-center space-x-1 cursor-pointer"
                onClick={() => console.log('New Game Clicked')}
              >
                <RotateCcw size={32} />
                <span>New Game</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
