import React from "react";
import SlideShow from "../SlideShow";
import recommend from "@/resoure/recommend";
import "./style.scss";

let Recommend = (props)=>{
    let imgs = recommend.slideshow;
    return (
        <div>
            <SlideShow imgs={imgs} />
        </div>
    );
}

export default Recommend;