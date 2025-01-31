import React from "react";

const Grid = () => {
  const gridSize = 230; // Total numbers to display
  const numbers = Array.from({ length: gridSize }, (_, i) => i + 1);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-10 gap-1 p-4 border border-gray-700">
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center border border-gray-500 text-white font-bold relative`}
          >
            {num}
            {/* Add blue diagonal lines */}
            {(index % 11 === 0 || index % 9 === 0) && (
              <div className="absolute inset-0 bg-blue-500 opacity-50 rotate-45"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
