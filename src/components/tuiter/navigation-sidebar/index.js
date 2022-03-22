import React from "react";

import pages from "./pages.json";

import NavigationItem from "./NavigationItem";

const NavigationSidebar = () => {
  return (
    <div>
      <div className="list-group">
        {pages.map((page, i = 0) => {
          i++;
          return <NavigationItem key={i} page={page} />;
        })}
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-block rounded-pill wd-blue">
          Tuit
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
