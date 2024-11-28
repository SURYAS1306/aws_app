import React from 'react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Full Stack Developer</h2>
        <p className="text-xl mb-8">Building beautiful and functional web applications</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
          View Projects
        </button>
      </div>
    </div>
  );
}