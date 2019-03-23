import React from "react";
import "./style.scss";
import pic_url from "@/images/user.jpg";

const Profile = ()=>(
    <div className="profile-wrap">
        <span className="profile-picture">
            <img src={pic_url} alt="Head portrait" />
        </span>
        <span className="profile-nick">
            <i className="profile-nick-name">{"_人生短短急个球_"}</i>
            <i className="fa fa-caret-down profile-caret-down"></i>
        </span>
    </div>
);

export default Profile;