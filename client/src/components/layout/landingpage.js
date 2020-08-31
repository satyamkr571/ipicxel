import React from "react";
import "./landingpage.css";
import SearchContainer from "./SearchContainer";

export default function Landingpage() {
  return (
    <div className="landing">
      <div className="main_contanier">
        <div className="text_container">
          <p>PortFolio for Professionals PhotoGrapher</p>
          <p style={{ fontSize: "3vw", fontWeight: "normal" }}>
            Library for Photos and Videos
          </p>
        </div>
        <SearchContainer />
      </div>
    </div>
  );
}
