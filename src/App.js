import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Background from "./assets/tamas-tuzes-katai-FokPj_ZhMiY-unsplash.jpg";

function App() {
  return (
    <div class="backgroundImage" style={{ backgroundImage: `url(${Background})`}}>
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              {/*<Route exact path="/about" component={About} />*
              <Route exact path="/contact" component={Contact} />
      <Route component={NoMatch} />*/}
            </Switch>
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
