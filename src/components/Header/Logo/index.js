import React from "react";
import "./style.scss";
import logo_img from "@/images/logo.png";

const Logo = ()=>(
    <div className="logo-wrap">
        <img src={logo_img} className="logo_img" alt="logo 😍" />
        <span className="logo-text">网易云音乐</span>
    </div>
);

export default Logo;