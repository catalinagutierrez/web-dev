import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "java.png",
    userName: "Java",
    handle: "Java",
  },
}) => {
  return (
    <div>
      <div className="row bg-transparent m-0">
        <div className="col-sm-2 p-2 bg-transparent">
          <img
            src={require(`../../../assets/${who.avatarIcon}`)}
            className="img-fluid rounded-circle border-0 bg-transparent"
            alt="avatar"
          />
        </div>
        <div className="col-sm-6 pt-2 bg-transparent text-nowrap">
          <p className="wd-main-text bg-transparent">
            <span className="bg-transparent">
              {who.userName}
              <i className="fa-solid fa-circle-check ps-1"></i>
            </span>
          </p>
          <p className="wd-secondary-text bg-transparent">@{who.handle}</p>
        </div>
        <div className="col-sm-4 bg-transparent d-flex">
          <a
            href="#"
            className="btn btn-block rounded-pill align-self-center wd-blue"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollowListItem;
