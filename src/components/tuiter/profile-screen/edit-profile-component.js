import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const EditProfileComponent = ({ toggleEdit }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const dob = new Date(profile.dateOfBirth);

  let [name, setName] = useState(profile.firstName + " " + profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(
    dob.toISOString().substring(0, 10)
  );

  const saveClickHandler = () => {
    profile.firstName = name.split(" ")[0];
    profile.lastName = name.split(" ")[1];
    profile.bio = bio;
    profile.location = location;
    profile.website = website;
    profile.dateOfBirth = dateOfBirth;

    dispatch({ type: "edit-profile", profile });
    toggleEdit(false);
  };

  return (
    <div>
      <div className="row">
        <h1 className="col h2">Edit profile</h1>
        <div className="col">
          <button
            className="float-end btn btn-block btn-light rounded-pill"
            onClick={saveClickHandler}
          >
            Save
          </button>
        </div>
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
      </div>
      <div className="row m-3 border border-secondary rounded-2">
        <span className="text-secondary">
          <small>Name</small>
        </span>
        <input
          type="text"
          className="bg-transparent text-white border-0"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="row m-3 border border-secondary rounded-2">
        <span className="text-secondary">
          <small>Bio</small>
        </span>
        <textarea
          className="bg-transparent text-white border-0"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        ></textarea>
      </div>
      <div className="row m-3 border border-secondary rounded-2">
        <span className="text-secondary">
          <small>Location</small>
        </span>
        <input
          type="text"
          className="bg-transparent text-white border-0"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        ></input>
      </div>
      <div className="row m-3 border border-secondary rounded-2">
        <span className="text-secondary">
          <small>Website</small>
        </span>
        <input
          type="text"
          className="bg-transparent text-white border-0"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        ></input>
      </div>
      <div className="row m-3 border border-secondary rounded-2">
        <span className="text-secondary">
          <small>Website</small>
        </span>
        <input
          type="date"
          className="bg-transparent text-white border-0"
          defaultValue={dateOfBirth}
          onChange={(event) => {
            setDateOfBirth(event.target.value + "T00:00:00");
          }}
        ></input>
      </div>
    </div>
  );
};

export default EditProfileComponent;
