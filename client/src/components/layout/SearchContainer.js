import React from "react";
import "./landingpage.css";
import { MDBIcon } from "mdbreact";
import { InputGroup, Form, FormControl } from "react-bootstrap";
export default function SearchContainer() {
  return (
    <div className="search_container">
      <InputGroup material className="search_input mb-3">
        <InputGroup.Prepend>
          {/* <div className="dropdown searchButton">
            <button
              className="btn searchButton"
              type="button"
              data-toggle="dropdown"
            >
              All Media
              <span>
                <MDBIcon fas icon="image" style={{ marginLeft: "10px" }} />
              </span>
            </button>
            <ul className="dropdown-menu dropDownul">
              <li className="dropDownli">
                <a href="#" className="dropDowna">
                  Photos
                  <span>
                    <MDBIcon
                      fas
                      icon="camera"
                      style={{ marginLeft: "10px", color: "black" }}
                    />
                  </span>
                </a>
              </li>
              <li className="dropDownli">
                <a href="#" className="dropDowna">
                  Videos
                  <span>
                    <MDBIcon
                      fas
                      icon="video"
                      style={{ marginLeft: "10px", color: "black" }}
                    />
                  </span>
                </a>
              </li>
              <li className="dropDownli">
                <a href="#" className="dropDowna">
                  Music
                  <span>
                    <MDBIcon
                      fas
                      icon="music"
                      style={{ marginLeft: "10px", color: "black" }}
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>*/}

          <Form.Control
            as="select"
            data-show-content="true"
            className="searchSelect fa"
          >
            <option
              data-show-content="true"
              value="allImages"
              className="searchOption"
            >
              All &#xf030; &#xf03d; &#xf001;
            </option>
            <option value="photos" className="searchOption">
              Photos &#xf030;
            </option>
            <option value="videos" className="searchOption">
              Videos &#xf03d;
            </option>
            <option value="musics" className="searchOption">
              Music &#xf001;
            </option>
          </Form.Control>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search for images, videos and many more"
          aria-label="Username"
          className="search_input"
        />

        <InputGroup.Append>
          <button type="button" className="btn searchButton">
            <MDBIcon fas icon="search" />
          </button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
