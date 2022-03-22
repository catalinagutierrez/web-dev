import React, { useState } from "react";

import EditProfileComponent from "./edit-profile-component";
import ProfileComponent from "./profile-component";

const ProfileScreen = () => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = (bool) => {
    setEdit(bool);
  };

  return (
    <div>
      {edit ? (
        <EditProfileComponent toggleEdit={toggleEdit} />
      ) : (
        <ProfileComponent toggleEdit={toggleEdit} />
      )}
    </div>
  );
};

export default ProfileScreen;
