"use client";
import React, { useState } from 'react';
import Container from '@/component/container';

const HoverShadowDiv: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shadowCoords, setShadowCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setShadowCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShadowCoords({ x: 0, y: 0 }); // Reset shadow coordinates
  };

  return (
    <div
      className={`bg-white  w-full p-5 rounded shadow-xl ring-1 mr-20 ring-slate-900/5 mb-4 ${
        isHovered ? 'bg-green-150' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Container title="project 1" description="something" topics={['all', 'all']} />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shadowCoords.x}px ${shadowCoords.y}px, rgba(0, 0, 0, 0.2), transparent)`,
        }}
      ></div>
    </div>
  );
};

export default HoverShadowDiv;
