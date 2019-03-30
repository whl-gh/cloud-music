import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Bar = (props)=> {
    const [index, setIndex] = useState(props.index || 0);
    let clickHandler = (e, i)=>{
        setIndex(i);
        props.onClick(e, i);
    }
    return (
        <div className="bar-wrap">
            <ul>
                {
                    props.routes.map((route, i)=>{
                        let path = props.match.path;
                        if(/\/$/.test(path)){
                            path = path.slice(0, path.length-1);
                        }
                        return (
                            <li className={`foundMusic-bar-item ${index===i?"active":""}`} onClick={(e)=>{clickHandler(e, i)}} key={i.toString()}>
                                <Link to={path+route.path}>{route.text}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

/*
class Bar extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: props.index,
        }
    }

    clickHandler(e, i){
        this.setState({index: i});
        this.props.onClick(e, i);
    }
    render (){
        return (
        <div className="bar-wrap">
            <ul>
                {
                    this.props.list.map((item, i)=>{
                        return (
                            <li className={`foundMusic-bar-item ${this.state.index===i?"active":""}`} onClick={(e)=>{this.clickHandler(e, i)}} key={i.toString()}>
                                <span>{item}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
        );
    }
}
*/

export default Bar;