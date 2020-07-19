import React from "react";
import bgimg6 from "../../image/bgimg6.jpg";
import { Card, Col, Row } from "react-bootstrap";
import appstore from "../../image/appstoreb.png";
import playstore from "../../image/playstoreb.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Card className="text-white" style={{ width: "100%" }}>
        <Card.Img
          src={bgimg6}
          alt="Card image"
          style={{ height: "400px", width: "100%" }}
        />
        <Card.ImgOverlay>
          <Card.Title>
            <h1>iPicXel</h1>
          </Card.Title>
          <Row>
            <Col sm={9}>
              <ul className="ul_linkclass">
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
              <Card.Text>
                <p>You can also reach us @</p>
              </Card.Text>

              <div className="row">
                <a
                  href="https://www.facebook.com/"
                  className="fa fa-facebook"
                  target="_blank"
                ></a>

                <a
                  href="https://www.google.com/"
                  className="fa fa-google"
                  target="_blank"
                ></a>

                <a
                  href="https://www.twitter.com/"
                  className="fa fa-twitter"
                  target="_blank"
                ></a>

                <a
                  href="https://www.youtube.com/"
                  className="fa fa-youtube"
                  target="_blank"
                ></a>

                <a
                  href="https://www.instagram.com/"
                  className="fa fa-instagram"
                  target="_blank"
                ></a>

                {/* <a
                  href="https://www.skype.com/"
                  className="fa fa-skype"
                  target="_blank"
                ></a> */}
              </div>
            </Col>
            <Col className="address" sm={3}>
              <address>
                iPicXel SriRam Summit, Wing 3, Electronic City, Bangalore,
                Karnataka (INDIA)- 5660100
              </address>

              <iframe
                className="mapstyle"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Sri%20Ram%20Summit&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
      <div className="row store">
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
      </div>
      <div>
        <p className="copyright">
          All the copyright reserved to the @ wittymindstechnologies.
        </p>
      </div>
    </div>
  );
}
