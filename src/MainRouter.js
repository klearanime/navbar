import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./component/Home"
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import AuthMovieHome from "./component/AuthMovieHome/AuthMovieHome"
import Navbar from "./component/Navbar/Navbar";

const MainRouter = (props) => {
  console.log(props)
  return (
    <Router>
      {/* <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} /> */}
      <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
      <Switch>
        <Route path="/movie-home" component={AuthMovieHome} />

        <Route path="/sign-up" component={SignUp} />

        <Route 
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
          )}
        />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
