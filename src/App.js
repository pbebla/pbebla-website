import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Background from "./assets/tamas-tuzes-katai-FokPj_ZhMiY-unsplash.jpg";
import { Resume } from "./Resume";

function App() {
  return (
    <div className="backgroundImage" style={{ backgroundImage: `url(${Background})`}}>
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Switch>
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
