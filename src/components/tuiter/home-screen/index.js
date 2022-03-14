import React from "react";

import NavigationSidebar from "../navigation-sidebar";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../post-summary-list";

const HomeScreen = () => (
  <div className="row mt-2">
    <div className="d-none d-md-block col-md-2 col-lg-1 col-xl-2">
      <NavigationSidebar active="home" />
    </div>
    <div className="col-sm-12 col-md-10 col-lg-6">
      <HomeComponent />
    </div>
    <div className="d-none d-lg-block col-lg-4 col-xl-4">
      <PostSummaryList />
    </div>
  </div>
);

export default HomeScreen;
