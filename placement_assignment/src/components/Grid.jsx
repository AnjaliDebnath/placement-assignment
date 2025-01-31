import React from "react";

const Grid = () => {
  const gridSize = 230; 
  const numbers = Array.from({ length: gridSize }, (_, i) => i + 1);

  // First diagonal: 
  const isBlueDiagonal1 = (num) => {
    return num <= 100 && (num - 1) % 11 === 0;
  };

  // Second diagonal: 
  const isBlueDiagonal2 = (num) => {
    return num >= 100 && num <= 181 && (num - 100) % 9 === 0;
  };

  // Third diagonal:
  const isBlueDiagonal3 = (num) => {
    return num >= 181 && num <= 225 && (num - 181) % 11 === 0;
  };

  return (
    <div className="bg-gradient-to-r from-black via-brown-900 to-red-800 min-h-screen flex items-center justify-center">

      <div className="grid grid-cols-10  p-4 border border-gray-700 bg-black">
        {numbers.map((num) => (
          <div
            key={num}
            className="w-10 h-10 flex items-center justify-center border border-gray-500 text-white font-bold relative"
          >
            {num}
            {/* First diagonal (1 → 100) */}
            {isBlueDiagonal1(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
            {/* Second diagonal (100 → 181) */}
            {isBlueDiagonal2(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
            {/* Third diagonal (181 → 215) */}
            {isBlueDiagonal3(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
