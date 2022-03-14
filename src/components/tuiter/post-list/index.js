import React from "react";

import PostItem from "./PostItem";
import posts from "./posts.json";

const Post = () => (
  <ul className="list-group">
    {posts.map((post, i = 0) => {
      i++;
      return <PostItem key={i} post={post} />;
    })}
  </ul>
);

export default Post;
