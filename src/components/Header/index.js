import React from "react";
import Logo from "./Logo";
import History from "./History";
import Search from "./Search";
import Profile from "./Profile";
import Toolbar from "./Toolbar";

import "./style.scss";

const Header = ()=>(
    <nav className="header-wrap">
        <div className="header-left">
            <Logo />
            <History />
            <Search />
        </div>
        <div className="header-right">
            <Profile />
            <Toolbar />
        </div>
    </nav>
);

export default Header;