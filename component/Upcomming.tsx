"use client";
import React, { useState } from 'react';

import Image from 'next/image';

// Define the types for props
type ContainerProps = {
  title: string;
  description: string;
  topics: string[];
};

const Upcomming: React.FC<ContainerProps> = ({ title, description, topics ,}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [shadowCoords, setShadowCoords] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setShadowCoords({ x, y });
    };
return(
<div
      className={`bg-white p-5 rounded shadow-xl h-60 w-full mr-3 mb-11   ring-1 ring-slate-900/5  ${
        isHovered ? 'bg-blue-800' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease', // Adding transition for smooth color change
      }}
    >
       
      <h3 className="text-2xl font-bold mt-3 mb-4">{title}</h3>
      <p className="text-lg mb-12 mt-6">{description}</p>
      <ul className="text-gree-100 flex mt-3 pr-3 font-thin ">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-100 rounded-lg pl-4 pr-4 bg-gray-100 ml-5 pt-4font flex">{topic}</li>
        ))}
      </ul>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shadowCoords.x}px ${shadowCoords.y}px, rgba(0, 0, 255, 0.1), transparent)`,
          display: isHovered ? 'block' : 'none', // Show the shadow only when hovered
        }}
      ></div>
    </div>
)

}

export default Upcomming;