import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen bg-background flex flex-col items-center justify-center gap-16">
      <div className="w-xs md:w-lg">
        <img src="/main.png" alt="main-image" />
      </div>
      <div>
        <button className="w-70 h-15 bg-white rounded bg-linear-to-r from-yellow-300  to-yellow-500 text-white font-bold border border-black cursor-pointer">
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Hero;
