import React from "react";
import "./landingpage.css";
import {
  InputGroup,
  Row,
  Col,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

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
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <InputGroup className="formdesigne">
                <DropdownButton title="All Cateogery" variant="light">
                  <Dropdown.Item href="#/action-2">
                    <i className="material-icons">camera_alt</i>
                    <p className="selectedText">Images</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i className="material-icons">music_video</i>
                    <p className="selectedText">Music</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i className="material-icons">video_library</i>
                    <p className="selectedText">Video</p>
                  </Dropdown.Item>
                </DropdownButton>

                <FormControl
                  placeholder="Sreach..."
                  aria-label="Search"
                  style={{
                    height: "100%",
                    marginTop: "0px",
                    fontSize: "2vw",
                    border: "0px",
                  }}
                />
                <InputGroup.Append>
                  <button variant="outline-secondary" className="buttondesgine">
                    <i className="material-icons" style={{ top: "0px" }}>
                      search
                    </i>
                  </button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
