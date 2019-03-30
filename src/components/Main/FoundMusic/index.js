import React from "react";
import Bar from "./Bar";
import RouteMap from "@/components/RouteMap";      
import "./style.scss";

const FoundMusic = (props)=>{
    let toggleBar = (e, i)=>{
        console.log(i)
    }
    return (
        <div className="foundMusic-wrap">
            <Bar {...props} onClick={toggleBar} />
            <div>
                <RouteMap {...props} />
            </div>
        </div>
    );
};

export default FoundMusic;