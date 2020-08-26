import React from "react";
import "./photographer.css";
import { Link } from "react-router-dom";
export default function Photographer() {
  return (
    <section class="photogrpher_landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Photographer Connector</h1>
          <p class="lead">
            Create a photographer profile/portfolio, share posts and get help
            from other photographers
          </p>
          <div class="buttons">
            <Link to="/register" class="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" class="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
