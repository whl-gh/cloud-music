import React from "react";
import { Sider } from "@/containers/Sider";
import RouteMap from "./RouteMap";
import "./style.scss";

const Main = ()=>(
    <div className="main-wrap">
        <div className="main-left">
            <Sider />
        </div>
        <div className="main-right">
            <RouteMap />
        </div>
    </div>
);

export default Main;