import React from 'react';

function Nav() {
  return (
    <div className="flex flex-row">
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mb-0 mt-0 mx-auto bg-white">
        <div className="rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800 ring-1 ring-zinc-900/5 backdrop-blur">
          <a className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900" href='/'>
            <span className="z-10 relative text-teal-600">Home</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
          </a>
          <a className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900" href='/'>
            <span className="z-10 relative text-teal-600">Home</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
          </a>
          <a className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900" href='/'>
            <span className="z-10 relative text-teal-600">Home</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
