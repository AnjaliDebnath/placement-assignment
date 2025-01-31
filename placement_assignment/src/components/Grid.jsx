import React, { useState, useEffect } from "react";

const Grid = () => {
  const gridSize = 230; 
  const numbers = Array.from({ length: gridSize }, (_, i) => i + 1);
  const [redOffset, setRedOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedOffset((prev) => (prev - 11 + gridSize) % gridSize); // Moving diagonal animation in the opposite direction
    }, 20); // Adjusted speed for smooth transition

    return () => clearInterval(interval);
  }, []);

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

  // Moving red diagonal
  const isRedDiagonal = (num) => {
    return (num + redOffset) % 11 === 0; // Moves diagonally in the opposite direction
  };

  return (
    <div className="bg-gradient-to-r from-black via-brown-900 to-red-800 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-10 p-4 border border-gray-700 bg-black">
        {numbers.map((num) => (
          <div
            key={num}
            className="w-10 h-10 flex items-center justify-center border border-gray-500 text-white font-bold relative"
          >
            {num}
            {isBlueDiagonal1(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
            {isBlueDiagonal2(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
            {isBlueDiagonal3(num) && (
              <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
            )}
            {isRedDiagonal(num) && (
              <div className="absolute inset-0 bg-red-500 opacity-80 transition-all duration-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
