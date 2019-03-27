import React, { Fragment } from "react";
import { Route } from "react-router-dom";
//导入路由
import routes from "@/route";

let RouteMap = (props)=>{
    return (
        <Fragment>
            {
                routes.map((route, i) => {
                    var Com = route.component || function(){return (<div>{route.path}</div>)};
                    if(route.exact){
                        return <Route path={route.path} exact component={Com} key={i.toString()} />
                    }else{
                        return <Route path={route.path} component={Com} key={i.toString()} />
                    }
                })
              }
        </Fragment>
    );   
};

export default RouteMap;