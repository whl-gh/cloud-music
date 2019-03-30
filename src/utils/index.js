import React from "react";
import { Route } from "react-router-dom";

export let routeMap = (props, Item, i)=>{
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
}