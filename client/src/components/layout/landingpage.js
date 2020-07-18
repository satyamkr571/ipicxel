import React from "react";
import "./landingpage.css";
import { InputGroup, Row, Col, FormControl, Dropdown } from "react-bootstrap";

const Landing = () => {
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
          {/* <Form>
            <Row>
              <Col xs={1}></Col>
              <Col xs={10}>
                <Form.Control placeholder="Search" className="formdesigne" />
              </Col>
              <Col xs={1}>
                <Button
                  type="submit"
                  className="buttondesgine"
                  style={{
                    width: "90%",
                    backgroundImage:
                      "linear-gradient(to bottom left, pink,cyan)",
                  }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form> */}
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <InputGroup className="formdesigne">
                <Dropdown
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                  className="buttondesgine"
                >
                  {/* <Dropdown.Item className="buttondesgine" href="#">
                    <i className="material-icons">camera_alt</i>
                  </Dropdown.Item> */}
                  <Dropdown.Item className="buttondesgine" href="#">
                    <i className="material-icons">video_library</i>
                  </Dropdown.Item>
                  <Dropdown.Item className="buttondesgine" href="#">
                    <i className="material-icons">image</i>
                  </Dropdown.Item>
                  <Dropdown.Item className="buttondesgine" href="#">
                    <i className="material-icons">music_video</i>
                  </Dropdown.Item>
                </Dropdown>
                <FormControl className="formdesigne" />
                <InputGroup.Append>
                  <button variant="outline-secondary" className="buttondesgine">
                    <i className="material-icons">search</i>
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
};

export default Landing;
