import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "",
    title: "jQuery",
    time: "last week",
    image: "../../../images/jquery.png",
    tweets: "122K",
  },
}) => (
  <div className="row p-2 m-0 d-flex justify-content-between bg-dark">
    <div className="col-8">
      {post.topic && <p className=" bg-dark wd-secondary-text">{post.topic}</p>}
      <span className=" bg-dark wd-main-text">
        {post.userName} <i className="fa-solid fa-circle-check"></i>
      </span>
      <span className="wd-secondary-text"> - {post.time}</span>
      {post.title && (
        <p className="wd-main-text wd-text-truncate">${post.title}</p>
      )}
    </div>
    <div className="col-4">
      <img
        className="float-end rounded-2 wd-post-img"
        src={require(`../../../assets/${post.image}`)}
      />
    </div>
  </div>
);

export default PostSummaryItem;
