import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WhatsHappening = () => {
  const profile = useSelector((state) => state.profile);
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
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
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
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
