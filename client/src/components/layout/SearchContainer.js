import React, { useState } from "react";
import "./searchContainer.css";
import { MDBIcon } from "mdbreact";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

export default function SearchContainer() {
  const [value, setValue] = useState([
    <span>
      All Image
      <MDBIcon
        fas
        icon="images"
        style={{ marginLeft: "10px", color: "black" }}
      />
    </span>,
  ]);
  const handleSelect = (e) => {
    if (e === "Photos") {
      setValue([
        <span>
          {e}
          <MDBIcon
            fas
            icon="camera"
            style={{ marginLeft: "10px", color: "black" }}
          />
        </span>,
      ]);
    }
    if (e === "Videos") {
      setValue([
        <span>
          {e}
          <MDBIcon
            fas
            icon="video"
            style={{ marginLeft: "10px", color: "black" }}
          />
        </span>,
      ]);
    }
    if (e === "Musics") {
      setValue([
        <span>
          {e}
          <MDBIcon
            fas
            icon="music"
            style={{ marginLeft: "10px", color: "black" }}
          />
        </span>,
      ]);
    }
    if (e === "All Images") {
      setValue([
        <span>
          {e}
          <MDBIcon
            fas
            icon="images"
            style={{ marginLeft: "10px", color: "black" }}
          />
        </span>,
      ]);
    }

    // const props = {
    //   className: "searchButton",
    // };
  };
  return (
    <div className="search_container">
      <InputGroup material="true" className="search_input mb-3">
        <InputGroup.Prepend>
          <DropdownButton
            as={ButtonGroup}
            title={value}
            onSelect={handleSelect}
            bsPrefix="searchButton"
          >
            <Dropdown.Item eventKey="All Images">
              All Images
              <span>
                <MDBIcon
                  fas
                  icon="image"
                  style={{ marginLeft: "10px", color: "black" }}
                />
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="Photos">
              Photo
              <span>
                <MDBIcon
                  fas
                  icon="camera"
                  style={{ marginLeft: "10px", color: "black" }}
                />
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="Videos">
              Videos
              <span>
                <MDBIcon
                  fas
                  icon="video"
                  style={{ marginLeft: "10px", color: "black" }}
                />
              </span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="Musics">
              Musics
              <span>
                <MDBIcon
                  fas
                  icon="music"
                  style={{ marginLeft: "10px", color: "black" }}
                />
              </span>
            </Dropdown.Item>
          </DropdownButton>
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
