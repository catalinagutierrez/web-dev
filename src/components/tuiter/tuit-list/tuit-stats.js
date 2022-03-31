import React from "react";
import { useDispatch } from "react-redux";

import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div className="row p-2">
      <div className="col-3 wd-secondary-text">
        <i className="fa-regular fa-comment"></i> {tuit.stats.comments}
      </div>
      <div className="col-3 wd-secondary-text">
        <i className="fa-regular fa-retweet"></i> {tuit.stats.retuits}
      </div>
      <div className="col-3 wd-secondary-text">
        <span
          onClick={() => {
            if (!tuit.liked) {
              updateTuit(dispatch, {
                ...tuit,
                stats: { ...tuit.stats, likes: tuit.stats.likes + 1 },
                liked: true,
              });
            } else {
              updateTuit(dispatch, {
                ...tuit,
                stats: { ...tuit.stats, likes: tuit.stats.likes - 1 },
                liked: false,
              });
            }
          }}
        >
          {tuit.liked && (
            <i
              className="fa-solid fa-thumbs-up me-1"
              style={{ color: "deepskyblue" }}
            ></i>
          )}
          {!tuit.liked && <i className="fa-solid fa-thumbs-up me-1"></i>}
        </span>
        {tuit.stats.likes}
      </div>
      <div className="col-3 wd-secondary-text">
        <span
          onClick={() => {
            if (!tuit.disliked) {
              updateTuit(dispatch, {
                ...tuit,
                stats: { ...tuit.stats, dislikes: tuit.stats.dislikes + 1 },
                disliked: true,
              });
            } else {
              updateTuit(dispatch, {
                ...tuit,
                stats: { ...tuit.stats, dislikes: tuit.stats.dislikes - 1 },
                disliked: false,
              });
            }
          }}
        >
          {tuit.disliked && (
            <i
              className="fa-solid fa-thumbs-down me-1"
              style={{ color: "firebrick" }}
            ></i>
          )}
          {!tuit.disliked && <i className="fa-solid fa-thumbs-down me-1"></i>}
        </span>
        {tuit.stats.dislikes}
      </div>
      <div className="col-1 wd-secondary-text">
        <i className="fa-regular fa-arrow-up-from-bracket"></i>
      </div>
    </div>
  );
};
export default TuitStats;
