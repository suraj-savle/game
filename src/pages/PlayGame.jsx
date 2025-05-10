import React from "react";
import Sidebar from "../components/Sidebar";

function PlayGame() {
  return (
    <div>
      <div className="logo absolute top-5 left-5 w-25">
        <img src="/main.png" alt="logo" />
      </div>
      <Sidebar />
      <div className="w-full h-screen bg-background flex flex-col md:flex-row gap-15 justify-center items-center">
        <div>
          <div className="w-full h-screen bg-background flex flex-col items-center justify-center gap-16">
            <div className="flex gap-5 border-b-2 py-3">
              <div className="p-5 bg-amber-100 rounded-2xl">
                <img src="/x.png" alt="" />
              </div>
              <div className="p-5 border border-amber-100 rounded-2xl">
                <img src="/o.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs sm:max-w-sm  md:max-w-md">
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              <div className="aspect-square w-full rounded-lg md:rounded-xl bg-box flex items-center justify-center hover:bg-amber-50 transition-colors p-8">
                <img src="/x.png" alt="" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="lg:w-80 flex flex-col gap-5">
          <button className="w-full py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold rounded-lg border border-black">
            New Game
          </button>
          
          <div className="p-5 border-2 border-white rounded-2xl bg-box">
            <h2 className="text-xl font-bold mb-3">Game Rules</h2>
            <ul className="space-y-2">
              <li>The game is played on a 3x3 grid</li>
              <li>Two players alternate turns marking spaces</li>
              <li>First to get 3 in a row wins</li>
              <li>If all squares are filled with no winner, it's a tie</li>
            </ul>
            <p className="mt-3 text-sm italic">
              Note: You can play background music from the menu in the top right corner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
