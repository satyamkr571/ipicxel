import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className=" container-fluid login">
      <div className="loginform">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <MDBCard>
              <MDBCardBody>
                <form>
                  <div className="container-fluid">
                    <p className="text_center">Sign up</p>
                  </div>
                  <div>
                    <MDBInput
                      className="forminput"
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      className="forminput"
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    {/* <MDBInput
                      className="forminput"
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    /> */}
                    <MDBInput
                      className="forminput"
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      className="forminput"
                      label="Confirm your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-0 mt-1">
                    <MDBBtn
                      gradient="blue"
                      type="submit"
                      className="btn-block z-depth-2a para_auth"
                    >
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-4 mb-3">
                <p className="para_auth d-flex justify-content-end">
                  Already a member?
                  <Link to="/login" className="blue-text ml-1">
                    Sign in
                  </Link>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </Col>
        </Row>
      </div>
    </div>
  );
}
