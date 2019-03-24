import React from "react";
import List from "./List";
import menuListDate from "@/resoure/menuList";

import "./style.scss";


const Menu = (props)=>{
    return (
    <div className="menu-wrap">
        {
            menuListDate.map((categoty, i)=>{
                if(i>1){
                    return <List categoty={categoty} index={i} coordinate={props.coordinate} dispatch={props.click} hasTools key={i.toString()}/>
                }else{
                    return <List categoty={categoty} index={i} coordinate={props.coordinate} dispatch={props.click} key={i.toString()}/>
                }
            })
        }
    </div>
    )
};

export default Menu;
