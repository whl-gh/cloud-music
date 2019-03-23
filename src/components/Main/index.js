import React from "react";
import Menu from "./Menu";
import "./style.scss";

const Main = ()=>(
    <div className="main-wrap">
        <div className="main-left">
            <Menu />
        </div>
        <div className="main-right"></div>
    </div>
);

export default Main;