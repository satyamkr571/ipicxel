import React from "react";
import "./landingpage.css";
import { InputGroup, Row, Col, FormControl } from "react-bootstrap";

export default function Landingpage() {
  return (
    <div className="landing">
      <div className="main-contanier">
        <div className="text-container">
          <p>PortFolio for Professionals PhotoGrapher</p>
          <p style={{ fontSize: "3vw", fontWeight: "normal" }}>
            Library for Photos and Videos
          </p>
        </div>
        <div className="search-container">
          <div className="row searchbox">
            <div className="col-3 searchboxselect">
              <select class="mdb-select searchboxselecter">
                <option value="0">Select Your Tag</option>
                <option value="1">Music</option>
                <option value="2">Picture</option>
                <option value="3">Videos</option>
                <option value="4">Indian Images</option>
              </select>
            </div>
            <div className="col-6 searchboxinput">
              <form className="searchboxinput">
                <input
                  className="form-control searchboxforminput"
                  type="text"
                  placeholder="Search"
                ></input>
              </form>
            </div>
            <div className="col-3 searchboxbutton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
