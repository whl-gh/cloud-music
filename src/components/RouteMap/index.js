import React, { Fragment } from "react";
import { Route } from "react-router-dom";

let RouteMap = (props)=>{
    return (
        <Fragment>
            {
                props.routes.map((Item, i) => {
                    let prefix = "";
                    if(!Item.component){
                        return null;
                    }
                    prefix = props.match ? props.match.path : prefix;
                    if(Item.exact){
                        return <Route path={prefix+Item.path} exact component={(props)=><Item.component {...props} routes={Item.children} />} key={i.toString()} />
                    }else{
                        return <Route path={prefix+Item.path} component={(props)=><Item.component {...props} routes={Item.children} />} key={i.toString()} />
                    }
                })
            }
        </Fragment>
    );   
};

export default RouteMap;