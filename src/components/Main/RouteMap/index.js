import React, { Fragment } from "react";
import { Route } from "react-router-dom";
//导入路由
import routes from "@/route";

let RouteMap = (props)=>{
    return (
        <Fragment>
            {
                routes.map((route, i) => {
                    if(route.exact){
                        return <Route path={route.path} exact component={ ()=><div>{route.path}</div>} key={i.toString()} />
                    }else{
                        return <Route path={route.path} component={()=><div>{route.path}</div>} key={i.toString()} />
                    }
                })
              }
        </Fragment>
    );   
};

export default RouteMap;