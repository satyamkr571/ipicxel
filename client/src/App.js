import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/landingpage";
import ImagePage from "./components/layout/imagepage";
import ImageLandingPage from "./components/layout/imagelandingpage";
import Footer from "./components/layout/footer";

const App = () => (
  <Fragment>
    <Navbar />
    <LandingPage />
    <ImagePage />
    <ImageLandingPage />
    <Footer />
  </Fragment>
);

export default App;
