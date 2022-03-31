import React from "react";
import { useDispatch } from "react-redux";

import { deleteTuit } from "../actions/tuits-actions";

import TuitStats from "./tuit-stats";

const TuitListItem = ({
  tuit = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
      username: "ReactJS",
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
      video: "unKvMC3Y1kI",
    },
    "logo-image": "react-blue.png",
    "avatar-image": "react-blue.png",
    stats: {
      comments: 123,
      retuits: 234,
      likes: 345,
    },
  },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="row border border-dark p-1 pt-3">
      {tuit["logo-image"] ? (
        <div className="col-2 bg-transparent">
          <img
            src={require(`../../../assets/${tuit["logo-image"]}`)}
            className="img-fluid rounded-circle border-0 bg-transparent"
            alt="tuit"
          />
        </div>
      ) : (
        <div className="col-2 bg-transparent">
          <img
            src={require(`../../../assets/user1.png`)}
            className="img-fluid rounded-circle border-0 bg-transparent"
            alt="tuit"
          />
        </div>
      )}

      <div className="col-10">
        <div>
          {tuit.postedBy ? (
            <div>
              {tuit.postedBy.username}
              <i className="fa-solid fa-circle-check m-1"></i>
            </div>
          ) : null}
          <span className="wd-secondary-text">
            {tuit.handle} - {tuit.time}
          </span>
          <i
            onClick={() => deleteTuit(dispatch, tuit)}
            className="fas fa-remove fa 
                  fa-pull-right"
          ></i>
          {tuit.title && <p>{tuit.title}</p>}
          {tuit.tuit && <p>{tuit.tuit}</p>}
        </div>
        {tuit.attachments && (
          <div className="overflow-hidden border border-dark rounded-4">
            {tuit.attachments.image && (
              <img
                src={require(`../../../assets/${tuit.attachments.image}`)}
                className="img-fluid w-100"
                alt="img"
              />
            )}
            {tuit.attachments.video && (
              <iframe
                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                allowFullScreen
                width="100%"
                height="280px"
                title="video attachment"
              />
            )}
          </div>
        )}
        {tuit.stats && <TuitStats tuit={tuit} />}
      </div>
    </div>
  );
};

export default TuitListItem;
