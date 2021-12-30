// ProtectedRoute.js

import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

type TProps = {
  component: React.ComponentType,
  loggedIn: boolean,
  path: string,
  exact?: boolean
}

const ProtectedRoute: FC<TProps>  = ({ component: Component, loggedIn, ...props }) => {
  console.log({ loggedIn })
  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute; 