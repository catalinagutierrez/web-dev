import React from "react";

import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../who-to-follow-list";

const ExploreScreen = () => (
  <div className="row mt-2">
    <div className="d-none d-md-block col-md-2 col-lg-1 col-xl-2">
      <NavigationSidebar active="explore" />
    </div>
    <div className="col-sm-12 col-md-10 col-lg-6">
      <ExploreComponent />
    </div>
    <div className="d-none d-lg-block col-lg-4 col-xl-4">
      <WhoToFollowList />
    </div>
  </div>
);

export default ExploreScreen;
