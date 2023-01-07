import React from "react";
import profileImage from "../images/image-avatar.png";

const Profile = () => {
  return (
    <div className="w-6 cursor-pointer mt-3 sm:w-8">
      <img src={profileImage} alt=""></img>
    </div>
  );
};

export default Profile;
