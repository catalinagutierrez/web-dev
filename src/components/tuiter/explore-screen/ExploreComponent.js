import React from "react";

import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => (
  <div>
    <div className="row">
      <div className="col-11 col-sm-10 p-3 ps-4">
        <div className="input-group bg-white rounded-pill">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent border-0">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <input
            className="form-control border-0 rounded bg-transparent"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="col-1 col-sm-2 p-0 d-flex">
        <a href="explore-settings.html" className="align-self-center">
          <i className="fa-solid fa-gear fa-lg wd-blue-icon"></i>
        </a>
      </div>
    </div>

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link rounded-2 active" href="for-you.html">
          For you
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link rounded-2" href="trending.html">
          Trending
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link rounded-2" href="news.html">
          News
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link rounded-2" href="sports.html">
          Sports
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link rounded-2" href="entertainment.html">
          Entertainment
        </a>
      </li>
    </ul>

    <div className="row p-0 mb-2 mt-2 m-0">
      <div className="col-12 p-0">
        <div className="wd-main-img-container">
          <img
            className="mw-100"
            src={require("../../../assets/starship.jpg")}
          />
          <div className="wd-main-img-text">Space X's Starship</div>
        </div>
      </div>
    </div>
    <PostSummaryList />
  </div>
);

export default ExploreComponent;
