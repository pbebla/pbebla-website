import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Score  from "./Score";

function App() {
  return (
    <Router>
      <div className="backgroundImage">
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </React.Fragment>
    </div>
    </Router>
  );
}

export default App;
