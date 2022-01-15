import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

const App = () => {

  return (
    <Switch>
      <Fragment>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/:uid" exact>
          <MoviePage />
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Fragment>
    </Switch>
  )
};

export default App;
