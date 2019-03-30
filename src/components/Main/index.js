import React from "react";
//导入路由
import routes from "@/route";
import { Sider } from "@/containers/Sider";
import RouteMap from "@/components/RouteMap";

import "./style.scss";

const Main = (props)=>(
    <div className="main-wrap">
        <div className="main-left">
            <Sider />
        </div>
        <div className="main-right">
            <RouteMap {...props} routes={routes} />
        </div>
    </div>
);

export default Main;