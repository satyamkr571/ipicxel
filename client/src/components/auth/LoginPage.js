import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from "mdbreact";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className=" container-fluid login ">
      <div className="loginform">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <MDBCard className="card">
              <MDBCardBody>
                <div className="container-fluid">
                  <p className="text_center">Sign in</p>
                </div>

                <MDBInput
                  className="forminput"
                  label="Your Username"
                  icon="user"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />

                <MDBInput
                  label="Your Password"
                  className="forminput"
                  icon="lock"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  success="right"
                />
                <p className=" para_auth blue-text d-flex justify-content-end pb-0">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-2">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-2a para_auth"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className=" para_auth text-right d-flex justify-content-center mb-2 pt-0">
                  or Sign in with:
                </p>
                <div className="row my-2 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    style={{ padding: "0px", width: "55px" }}
                    className="mr-md-4 z-depth-1a para_auth btn-floating btn-f"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="blue-text text-center "
                    />
                  </MDBBtn>

                  <MDBBtn
                    type="button"
                    color="white"
                    style={{ padding: "0px", width: "55px" }}
                    rounded
                    className="mr-md-4 z-depth-5a para_auth "
                  >
                    <MDBIcon
                      fab
                      icon="fab fa-google-plus-g"
                      className="red-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    style={{
                      padding: "0px",
                      width: "55px",
                      fontWeight: "bolder",
                    }}
                    rounded
                    className="mr-md-4 z-depth-5a para_auth"
                  >
                    <MDBIcon
                      fab
                      icon="fas fa-instagram"
                      style={{
                        padding: "8px",
                        width: "55px",
                        color: "blue",
                        fontWeight: "bolder",
                      }}
                    />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-1 mb-1">
                <p className="para_auth d-flex justify-content-end">
                  Not a member?
                  <Link to="/register" className="blue-text ml-1">
                    Sign Up
                  </Link>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </Col>
        </Row>
      </div>
    </section>
  );
}
