import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { MDBIcon } from "mdbreact";
import "./landingpage.css";

export default function SelectArea() {
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
  };
  return (
    <DropdownButton
      title={value}
      onSelect={handleSelect}
      variant="transparent"
      className="searchButton"
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

    // 2nd Ways

    //         <Form.Control
    //     as="select"
    //     data-show-content="true"
    //     className="searchSelect fa"
    //   >
    //     <option
    //       data-show-content="true"
    //       value="allImages"
    //       className="searchOption"
    //     >
    //       All &#xf030; &#xf03d; &#xf001;
    //     </option>
    //     <option value="photos" className="searchOption">
    //       Photos &#xf030;
    //     </option>
    //     <option value="videos" className="searchOption">
    //       Videos &#xf03d;
    //     </option>
    //     <option value="musics" className="searchOption">
    //       Music &#xf001;
    //     </option>
    //   </Form.Control>

    // 3rd ways

    //   <div className="dropdown searchButton">
    //         <button
    //           className="btn dropdown-toggle searchButton"
    //           type="button"
    //           data-toggle="dropdown"
    //         >
    //           All Media
    //           <span>
    //             <MDBIcon fas icon="image" style={{ marginLeft: "10px" }} />
    //           </span>
    //         </button>
    //         <ul className="dropdown-menu dropDownul">
    //           <li className="dropDownli">
    //             <a href="/" className="dropDowna">
    //               Photos
    //               <span>
    //                 <MDBIcon
    //                   fas
    //                   icon="camera"
    //                   style={{ marginLeft: "10px", color: "black" }}
    //                 />
    //               </span>
    //             </a>
    //           </li>
    //           <li className="dropDownli">
    //             <a href="/" className="dropDowna">
    //               Videos
    //               <span>
    //                 <MDBIcon
    //                   fas
    //                   icon="video"
    //                   style={{ marginLeft: "10px", color: "black" }}
    //                 />
    //               </span>
    //             </a>
    //           </li>
    //           <li className="dropDownli">
    //             <a href="/" className="dropDowna">
    //               Music
    //               <span>
    //                 <MDBIcon
    //                   fas
    //                   icon="music"
    //                   style={{ marginLeft: "10px", color: "black" }}
    //                 />
    //               </span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
  );
}
