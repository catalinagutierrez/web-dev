import React from "react";
import { Route, Routes } from "react-router-dom";

import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";

const Tuiter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
      </Routes>
    </div>
  );
};

export default Tuiter;
