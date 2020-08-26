import React from "react";
import "./photographer.css";
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
            <a href="register.html" class="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" class="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
