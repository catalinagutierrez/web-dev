import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { findAllTuits } from "../actions/tuits-actions";

import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();

  useEffect(() => findAllTuits(dispatch), [dispatch]);

  return (
    <ul className="list-group">
      {tuits.map &&
        tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
    </ul>
  );
};

export default TuitList;
