import React, { useState, useEffect } from 'react';

const TracingBeam: React.FC = () => {
  const [showTracingBeam, setShowTracingBeam] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowTracingBeam(true);
    } else {
      setShowTracingBeam(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-10 bg-red-500 z-10 transition-height duration-300 ${
        showTracingBeam ? 'h-20' : 'h-0'
      }`}
    ></div>
  );
};

export default TracingBeam;
