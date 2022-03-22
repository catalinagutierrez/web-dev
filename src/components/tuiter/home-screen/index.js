import React from "react";

import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening/whats-hapenning";

import "./home.css";

const HomeScreen = () => (
  <div>
    <WhatsHappening />
    <TuitList />
  </div>
);

export default HomeScreen;
