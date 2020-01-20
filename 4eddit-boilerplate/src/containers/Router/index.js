import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from '../SignUpPage';
import PostsFeed from '../PostsFeed';
import Feed from "../Feed";

export const routes = {
  root: "/",
  feed: "/feed",
  SignUp: "/signup"
};

function Router(props) {  
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route path={routes.feed} component={Feed} />
        <Route path={routes.SignUp} component={SignUpPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
