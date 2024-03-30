import React from 'react';

type ArrowButtonProps = {
  direction: 'up' | 'down';
  onClick: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const icon = direction === 'up' ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
