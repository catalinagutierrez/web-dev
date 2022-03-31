import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
  const profile = useSelector((state) => state.profile);
  let [newTuit, setNewTuit] = useState({ tuit: "New tuit" });
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    createTuit(dispatch, {
      ...newTuit,
      stats: { comments: 0, likes: 0, dislikes: 0, retuits: 0 },
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-2 bg-transparent">
          <img
            src={require(`../../../assets/${profile.profilePicture}`)}
            className="img-fluid rounded-circle border-0 bg-transparent"
            alt="tuit"
          />
        </div>
        <textarea
          className="col-10 bg-transparent text-white border-dark wd-whats-happening-textbox"
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
          placeholder="What's happening?"
        ></textarea>
      </div>
      <div className="row justify-content-end">
        <button
          className="col-2 btn btn-block rounded-pill wd-blue m-2"
          onClick={tuitClickHandler}
        >
          Tuit
        </button>
      </div>
    </div>
  );
};

export default WhatsHappening;
