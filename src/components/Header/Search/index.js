import React from "react";
import "./style.scss";

const Search = ()=>(
    <div className="search-wrap">
        <div className="search-group">
            <input type="text" className="search-input" placeholder="搜索音乐、视频、歌词、电台" />
            <i className="fa fa-search search-icon"></i>
        </div>
    </div>
);

export default Search;