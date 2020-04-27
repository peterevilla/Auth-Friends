import React from 'react'
import {Redirect, Route} from "react-router-dom";

const  PrivateRoute = ({ component: Component, ...props }) => {
    
        return (
            <Route
              {...props}
              render={() => {
                if (localStorage.getItem("token")) {
                  return <Component />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            />
          );
    
}

export default PrivateRoute;

