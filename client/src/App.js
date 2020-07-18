import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/landingpage";
import ImagePage from "./components/layout/imagepage";

const App = () => (
  <Fragment>
    <Navbar />
    <LandingPage />
    <ImagePage />
  </Fragment>
);

export default App;
