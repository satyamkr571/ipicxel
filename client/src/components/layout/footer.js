import React from "react";
import { Card } from "react-bootstrap";
import appstore from "./image/appstoreb.png";
import playstore from "./image/playstoreb.png";
import { Row, Col } from "react-bootstrap";
import "./footer.css";

export default function Footer() {
  return (
    <div className="fluid-conatiner" style={{ padding: "0px", margin: "0px" }}>
      <div className="footer">
        <Row style={{ width: "99%", marginLeft: "1%" }}>
          <Col xs={12} md={8}>
            <ul className="ul_linkclass">
              <li>
                <a href="#" className="li_linkclass">
                  <h1>iPicXel</h1>
                </a>
              </li>
              <li>
                <a href="#" className="li_linkclass">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="li_linkclass">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="li_linkclass">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="li_linkclass">
                  Policy
                </a>
              </li>
            </ul>

            <div className="social_contact">
              You can also reach us @
              <div className="row">
                <button type="button" className="btn btn-fb socialbtn">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </button>

                <button type="button" className="btn btn-tw socialbtn">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-gplus socialbtn">
                  <i className="fab fa-google-plus-g"></i>
                </button>

                <button type="button" className="btn btn-ins socialbtn">
                  <i className="fab fa-instagram"></i>
                </button>

                <button type="button" className="btn btn-yt socialbtn">
                  <i className="fab fa-youtube"></i>
                </button>

                {/* <a
                  href="https://www.skype.com/"
                  className="fa fa-skype"
                  target="_blank"
                ></a> */}
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} className="address">
            <Card
              style={{
                marginTop: "10px",
                height: "250px",
                padding: "5px",
              }}
            >
              <iframe
                className="mapstyle"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Sri%20Ram%20Summit&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </Card>
            <p>
              iPicXel SriRam Summit, Wing 3, Electronic City, Bangalore,
              Karnataka (INDIA)- 5660100
            </p>
          </Col>
        </Row>
      </div>
      <div className="fluid-container store">
        <a href="#">
          <img
            src={appstore}
            alt="Card image"
            style={{ height: "80%", width: "350px" }}
          />
        </a>
        <a href="#">
          <img
            src={playstore}
            alt="Card image"
            style={{ height: "85%", width: "320px" }}
          />
        </a>
        <div>
          <p className="copyright">
            All the copyright reserved to the @ wittymindstechnologies.
          </p>
        </div>
      </div>
    </div>
  );
}
