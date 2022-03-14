import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";

import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <div>
      <div className="row p-3 m-0 bg-dark">
        <p className="wd-main-text">Who to follow</p>
      </div>
      <ul className="list-group bg-dark">
        {who.map((who, i = 0) => {
          i++;
          return <WhoToFollowListItem key={i} who={who} />;
        })}
      </ul>
    </div>
  );
};

export default WhoToFollowList;
