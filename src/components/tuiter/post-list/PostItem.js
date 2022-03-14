import React from "react";

const PostItem = ({
  post = {
    userName: "Elon Musk",
    userImage: "user1.png",
    time: "23h",
    handle: "@elonmusk",
    title: "Amazing show about @inspiration4x mission!",
    image: "inspiration4.png",
    contentTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    contentBody:
      "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space and more dummy text to test truncation",
    tweets: "3.5K",
    likes: "37.5K",
    comments: "4.2K",
  },
}) => (
  <div className="row border border-dark p-1 pt-3">
    <div className="col-2 bg-transparent">
      <img
        src={require(`../../../assets/${post.userImage}`)}
        className="img-fluid rounded-circle border-0 bg-transparent"
        alt="post"
      />
    </div>
    <div className="col-10">
      <div>
        {post.userName}
        <i className="fa-solid fa-circle-check"></i>
        <span className="wd-secondary-text">
          {post.handle}-{post.time}
        </span>
        <p>{post.title}</p>
      </div>
      <div className="overflow-hidden border border-dark rounded-4">
        <img
          src={require(`../../../assets/${post.image}`)}
          className="img-fluid w-100"
        />
        {post.contentTitle && post.contentBody && (
          <div className="p-3">
            <div>{post.contentTitle}</div>
            <div className="wd-secondary-text wd-text-truncate">
              <span>{post.contentBody}</span>
            </div>
          </div>
        )}
      </div>
      <div className="row p-2">
        <div className="col-3 wd-secondary-text">
          <i className="fa-regular fa-comment"></i> {post.comments}
        </div>
        <div className="col-3 wd-secondary-text">
          <i className="fa-regular fa-retweet"></i> {post.tweets}
        </div>
        <div className="col-3 wd-secondary-text">
          <i className="fa-regular fa-heart"></i> {post.likes}
        </div>
        <div className="col-3 wd-secondary-text">
          <i className="fa-regular fa-arrow-up-from-bracket"></i>
        </div>
      </div>
    </div>
  </div>
);

export default PostItem;
