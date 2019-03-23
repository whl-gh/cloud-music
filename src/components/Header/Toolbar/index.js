import React from "react";
import "./style.scss";

const Toolbar = ()=>(
    <div className="toolbar-wrap">
        <span className="toolbar-item fa fa-user-o"></span>
        <span className="toolbar-item fa fa-envelope-o"></span>
        <span className="toolbar-item fa fa-cog"></span>
        <span className="toolbar-split"></span>
        <span className="toolbar-item fa fa-minus-square-o"></span>
        <span className="toolbar-item fa fa-square-o"></span>
        <span className="toolbar-item fa fa-times"></span>
    </div>
);

export default Toolbar;