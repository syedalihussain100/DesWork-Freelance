import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeCircleCheck,
  faHeadphonesAlt,
  faLocationDot,
  faStar,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";

export const HowItWork = () => {
  return (
    <Container fluid>
      <div className="banner_main1">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <div className="bg_white text-white text-center">
                    <h1>Freelancer Search</h1>
                    <div>
                      <p>Home / Freelancer Search</p>
                    </div>

                    <Col lg="12" className="webkit">
                      <Row>
                        <Col>
                          <div className="About_main_images_search">
                            <input placeholder="What Are You Loking For"></input>
                            <button className="d-flex justify-content-center align-items-center">
                              <p className="m-0 p-2">
                                <BsSearch />
                              </p>
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row className="p-3">
          <Col lg="4">
            <div
              className="p-3 pt-5"
              style={{ background: "#E6E7E8", borderRadius: "20px" }}
            >
              <div style={{ background: "white", borderRadius: "10px" }}>
                <div className="p-3 py-5">
                  <h2 style={{ fontSize: "20px" }}>
                    Search Filters
                    <span
                      style={{
                        color: "#E9735C",
                        fontSize: "16px",
                        float: "right",
                      }}
                    >
                      Clear Result
                    </span>
                  </h2>
                </div>
                <hr />
                <div className="p-3 py-5">
                  <NavDropdown
                    title="Search By Keyword"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <hr />
                <div className="p-3 py-5">
                  <NavDropdown title="Price Rate" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <div className="pt-4">
                    <input
                      type="range"
                      min="-30"
                      style={{ width: "100%" }}
                      max="30"
                      step="1"
                      // value="0"
                      oninput="document.documentElement.style.setProperty('--skew', 'skew('+this.value+'deg)');"
                    />
                  </div>
                </div>
                <div className="p-5" style={{ textAlign: "center" }}>
                  <div className="d-flex">
                    <div
                      className="p-3 px-6"
                      style={{
                        background: "#E6E7E8",
                        borderRadius: "10px",
                        width: "50%",
                      }}
                    >
                      0
                    </div>
                    <div
                      className="p-3 px-6 mx-3"
                      style={{
                        background: "#E6E7E8",
                        borderRadius: "10px",
                        width: "50%",
                      }}
                    >
                      100
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 p-3 ">
                <h2 style={{ fontSize: "18px" }}>Search By Skills</h2>
                <h3 style={{ fontSize: "15px", marginTop: "20px" }}>
                  Actor (2)
                </h3>

                <h3 style={{ fontSize: "15px", marginTop: "20px" }}>
                  Android Developer (2)
                </h3>
                <h3 style={{ fontSize: "15px", marginTop: "20px" }}>
                  {" "}
                  Computer Operator (1)
                </h3>
                <h3 style={{ fontSize: "15px", marginTop: "20px" }}>
                  {" "}
                  Content writter (3)
                </h3>
                <h3 style={{ fontSize: "15px", marginTop: "20px" }}>
                  {" "}
                  Data Entry (2)
                </h3>
              </div>
            </div>
          </Col>
          <Col lg="8" className="mt5">
            <div style={{ background: "white" }} className="p-3">
              <div
                className="p-3"
                style={{ background: "#E6E7E8", borderRadius: "20px" }}
              >
                <h2 style={{ fontSize: "20px" }}>
                  Found 9 Results
                  <span style={{ float: "right" }}>
                    <NavDropdown
                      title="Sort by"
                      id="navbarScrollingDropdown"
                      style={{ background: "white", borderRadius: "20px" }}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </span>
                </h2>
              </div>

              <Row>
                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="p-3">
                    <div style={{ background: "#E9735C" }}>
                      <Image
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={require("../assets/freelancer.png")}
                      />
                      <div className="p-3" style={{ color: "white" }}>
                        <h2 style={{ fontSize: "14px", paddingBottom: "10px" }}>
                          SCO EXPERTS
                          <span style={{ float: "right" }}>
                            $ 29.00 <br />
                            hourly
                          </span>
                        </h2>
                        <div className="d-flex">
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Artist{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Designer{" "}
                          </button>
                          <button
                            className="btn button text-white mx-1"
                            style={{
                              fontSize: "10px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            Developer{" "}
                          </button>

                          <button
                            className="btn button text-white"
                            style={{
                              fontSize: "15px",
                              background: "#E9735C",
                              padding: "0px",
                            }}
                          >
                            ....
                          </button>
                        </div>
                        <h2 className="p-2" style={{ fontSize: "8px" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat
                        </h2>
                        <div>
                          <h2 style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon
                              style={{ color: "white", fontSize: "10px" }}
                              icon={faStar}
                            />{" "}
                            1 Reviews
                            <span style={{ float: "right", fontSize: "10px" }}>
                              Member since january 1,2021
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="12" className="p-2">
            <div
              className="p-3"
              style={{ background: "#E6E7E8", borderRadius: "20px" }}
            >
              <h2 style={{ fontSize: "25px" }}>Ready To Get Started</h2>
              <p>
                The Exertio is a Premium WordPress Theme, you can create your
                own market place website using this theme. It allows you to get
                a commission for hiring a freelancer or for each service sold.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
