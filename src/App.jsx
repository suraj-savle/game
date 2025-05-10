import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </div>
  );
}

export default App;
