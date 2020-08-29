import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Photographer from "./components/photographer/Photographer";
import Register from "./components/auth/Register";
import Login from "./components/auth/LoginPage";
import Footer from "./components/layout/Footer";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/photographer" component={Photographer}></Route>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
