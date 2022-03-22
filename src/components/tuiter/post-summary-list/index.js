import React from "react";

import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";

const PostSummary = () => (
  <ul className="list-group">
    {posts.map((post, i = 0) => {
      i++;
      return <PostSummaryItem key={i} post={post} />;
    })}
  </ul>
);

export default PostSummary;
