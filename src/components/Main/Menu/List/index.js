import React, { useState, Fragment } from "react";
import "./style.scss";

const List = ({categoty, index, coordinate, hasTools, dispatch })=>{
    const [isHide, setHide] = useState(false);
    let { title, items } = { ...categoty };
    let toggle = (e)=>{
        if(e.target.getAttribute("class").lastIndexOf("menu-header-plus")!==-1){
            alert("添加东西")
        }else{
            setHide(!isHide);
        }
    }
    return (
        <Fragment>
            <h3 className="menu-header" onClick={toggle}>
                <span className="menu-header-title">{title}</span>
                {
                    hasTools ? 
                    (<span className="menu-header-tools">
                        <i className="fa fa-plus-circle menu-header-plus"></i>
                        <i className={`fa ${isHide?'fa-chevron-right':'fa-chevron-down'} menu-header-chevron`}></i>
                    </span>): null
                }
            </h3>
            <ul className={`menu-content ${ isHide?"hide":""}`}>
                {
                    items.map((item, i)=>{
                        return (
                            <li className={`menu-item ${coordinate.toString()===[index,i].toString()?'active':''}`} onClick={(e)=>{dispatch([index, i])}} key={i.toString()}>
                                <i className={`${item.icon} menu-item-icon`}></i>
                                <span>{item.text}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </Fragment>
    );
};

export default List;
