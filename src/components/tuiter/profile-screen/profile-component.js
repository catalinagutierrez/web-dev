import React from "react";
import { useSelector } from "react-redux";

import "./profile-component.css";

const ProfileComponent = ({ toggleEdit }) => {
  const profile = useSelector((state) => state.profile);
  const dateOfBirth = new Date(profile.dateOfBirth);

  const dateJoined = new Date(
    profile.dateJoined.split("/")[1],
    profile.dateJoined.split("/")[0],
    0
  );

  return (
    <div>
      <div className="row">
        <h1 className="h2">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="wd-secondary-text">{profile.tuitCount} Tweets</p>
      </div>
      <div className="row mt-2">
        <img
          src={require(`../../../assets/${profile.bannerPicture}`)}
          alt="banner"
        />
      </div>
      <div className="row">
        <img
          className="col-2 wd-profile-image"
          src={require(`../../../assets/${profile.profilePicture}`)}
          alt="banner"
        />
        <div className="col">
          <button
            className="col m-3 float-end btn btn-block rounded-pill text-white border-secondary"
            onClick={() => toggleEdit(true)}
          >
            Edit profile
          </button>
        </div>
        <div className="row mt-2">
          <p className="h4">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="wd-secondary-text">@{profile.handle}</p>
        </div>
        <div className="row mt-3">
          <p>{profile.bio}</p>
        </div>
        <div className="row">
          <div className="col-4 text-secondary">
            <i className="fa fa-location-dot"></i> {profile.location}
          </div>
          <div className="col-4 text-secondary">
            <i className="fa fa-cake"></i> Born{" "}
            {dateOfBirth.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="col-4 text-secondary">
            <i className="fa fa-calendar"></i> Joined{" "}
            {dateJoined.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            {profile.followingCount}
            <span className="text-secondary"> Following</span>
          </div>
          <div className="col-4">
            {profile.followersCount}
            <span className="text-secondary"> Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
