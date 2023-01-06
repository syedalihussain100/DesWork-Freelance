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
import { BsSearch } from "react-icons/bs";

export const MainBanner = () => {
  return (
    <Container fluid>
      <div className="banner_main">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <div className="bg_white text-white text-center">
                    <h1>Hire Expert & Get Your Job Done</h1>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation
                      </p>
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

      <Container className="py-5">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "50px" }}>
            Explore Professional{" "}
            <span style={{ color: "#E45033", fontWeight: "bolder" }}>
              Categories
            </span>
          </h3>
          <p>Freelancing talent at your fingertips at a reasonable cost</p>
        </div>
        <Row className="pt-5 text-center">
          <Col className="webkit">
            <div className="p-4 videomain">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <h3 className="py-3" style={{ fontSize: "30px" }}>
              Video & Animation
            </h3>
            <p className="pt-3 p-2" style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </Col>

          <Col className="webkit">
            <div className="p-4 videomain">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <h3 className="py-3" style={{ fontSize: "30px" }}>
              Traveling
            </h3>
            <p className="pt-3 p-2" style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </Col>

          <Col className="webkit">
            <div className="p-4 videomain">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <h3 className="py-3" style={{ fontSize: "30px" }}>
              Bussiness
            </h3>
            <p className="pt-3 p-2" style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </Col>
          <Col lg="12" style={{ textAlign: "center" }} className="py-5">
            <button
              className="btn button bg-danger text-white px-5"
              style={{ fontSize: "15px" }}
            >
              Read More
            </button>
          </Col>
        </Row>
      </Container>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "50px" }}>
            Our Lates
            <span style={{ color: "#E45033", fontWeight: "bolder" }}>Jobs</span>
          </h3>
          <p>Explore the most viewd jobs for today</p>
        </div>

        <Row className="p-3">
          <Col lg="8">
            <div
              style={{ fontSize: "10px", background: "#E6E7E8" }}
              className="px-4 mx-3 py-5"
            >
              <h2 style={{ fontSize: "20px" }}>
                Website Designer Required For Directory Theme
                <span style={{ float: "right" }}>
                  $50.00
                  <br />
                  (Hourly)
                </span>
              </h2>
              <div className="dflex">
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Artist{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Designer{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Developer{" "}
                </button>

                <button
                  className="btn button text-white  mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  ....
                </button>
              </div>
              <h2 style={{ fontSize: "20px" }} className="py-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
              </h2>
              <hr
                style={{ width: "100%", color: "black", border: "2px solid" }}
              />
              <div className="py-3 px-3">
                <div className="d-flex content">
                  <div className="px-3">
                    <h5>
                      Exairy <br />
                      316 days left{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Proposals <br />5 recived{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Location <br />
                      remote{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3" style={{ float: "right" }}>
                    <button
                      className="btn button text-white px-5"
                      style={{ fontSize: "15px", background: "#E9735C" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt5">
            <div
              style={{ background: "#E6E7E8", fontSize: "10px" }}
              className="px-4 mx-3 py-2"
            >
              <h2 style={{ fontSize: "20px" }}>Promoted Freelancers</h2>
              <div className="p-3">
                <Image
                  style={{ height: "auto", objectFit: "cover", width: "90%" }}
                  src={require("../assets/freelancer.png")}
                />
              </div>
              <h2 style={{ fontSize: "20px" }}>Social Media Expert</h2>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                $40 &nbsp;&nbsp;<span>Hourly </span>
              </h2>
              <h2 style={{ fontSize: "17px" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ fontSize: "15", color: "#E9735C" }}
                />{" "}
                2 Reviews
              </h2>
              <h2 style={{ fontSize: "17px" }}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ fontSize: "15", color: "#E9735C" }}
                />{" "}
                USA
              </h2>
            </div>
          </Col>
          <Col lg="8" className="mt5">
            <div
              style={{ fontSize: "10px", background: "#E6E7E8" }}
              className="px-4 mx-3 py-5"
            >
              <h2 style={{ fontSize: "20px" }}>
                Website Designer Required For Directory Theme
                <span style={{ float: "right" }}>
                  $50.00
                  <br />
                  (Hourly)
                </span>
              </h2>
              <div className="dflex">
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Artist{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Designer{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Developer{" "}
                </button>

                <button
                  className="btn button text-white  mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  ....
                </button>
              </div>
              <h2 style={{ fontSize: "20px" }} className="py-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
              </h2>
              <hr
                style={{ width: "100%", color: "black", border: "2px solid" }}
              />
              <div className="py-3 px-3">
                <div className="d-flex content">
                  <div className="px-3">
                    <h5>
                      Exairy <br />
                      316 days left{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Proposals <br />5 recived{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Location <br />
                      remote{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3" style={{ float: "right" }}>
                    <button
                      className="btn button text-white px-5"
                      style={{ fontSize: "15px", background: "#E9735C" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8" className="mt-5">
            <div
              style={{ fontSize: "10px", background: "#E6E7E8" }}
              className="px-4 mx-3 py-5"
            >
              <h2 style={{ fontSize: "20px" }}>
                Website Designer Required For Directory Theme
                <span style={{ float: "right" }}>
                  $50.00
                  <br />
                  (Hourly)
                </span>
              </h2>
              <div className="dflex">
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Artist{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Designer{" "}
                </button>
                <button
                  className="btn button text-white px-3 mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  Developer{" "}
                </button>

                <button
                  className="btn button text-white  mx-3"
                  style={{ fontSize: "15px", background: "#E9735C" }}
                >
                  ....
                </button>
              </div>
              <h2 style={{ fontSize: "20px" }} className="py-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
              </h2>
              <hr
                style={{ width: "100%", color: "black", border: "2px solid" }}
              />
              <div className="py-3 px-3">
                <div className="d-flex content">
                  <div className="px-3">
                    <h5>
                      Exairy <br />
                      316 days left{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Proposals <br />5 recived{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3">
                    <h5>
                      Location <br />
                      remote{" "}
                    </h5>{" "}
                  </div>
                  <div className="px-3" style={{ float: "right" }}>
                    <button
                      className="btn button text-white px-5"
                      style={{ fontSize: "15px", background: "#E9735C" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="12" style={{ textAlign: "center" }} className="py-5">
            <button
              className="btn button bg-danger text-white px-5"
              style={{ fontSize: "15px" }}
            >
              Load More{" "}
            </button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg">
        <Container>
          <Row>
            <Col lg="8">
              <div className="p-3">
                <Image
                  style={{ height: "auto", objectFit: "cover", width: "100%" }}
                  src={require("../assets/galery.png")}
                />
              </div>
            </Col>
            <Col lg="4" style={{ alignItems: "center" }}>
              <div className="p-3 pt-5">
                <h3 style={{ fontSize: "30px" }}>
                  Amazing Marketplace Website in
                  <span style={{ color: "#E45033", fontWeight: "bolder" }}>
                    Minutes ?
                  </span>
                </h3>
                <p className="pt-3">
                  Experience state-of-the-art marketplace platform with the
                  Exertio. We combine the experience of our global community
                  around the globe for a best marketplace theme. With Exertio,
                  you can develop a website for remote freelancers that will
                  provide their best to the clients who are looking for remote
                  resources.
                </p>
              </div>
              <Col lg="12" style={{ textAlign: "center" }} className="py-5">
                <button
                  className="btn button bg-danger text-white px-5"
                  style={{ fontSize: "15px" }}
                >
                  Read More{" "}
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg1">
        <Container>
          <Row>
            <Col lg="12">
              <div className="p-3 pt-5 text-center">
                <h3 style={{ fontSize: "30px" }}>
                  Make The Best Money Decisions, And
                  <br />
                  <span style={{ color: "#E45033", fontWeight: "bolder" }}>
                    Feel Good While Doing It.
                  </span>
                </h3>
              </div>
            </Col>
            <Col lg="6" className="d-flex">
              <div className="dflexx align-items-center px-2">
                <FontAwesomeIcon icon={faUser} className="fafause" />{" "}
                <div className="p-3">
                  <h3 style={{ fontSize: "25px" }}>JOHN DOE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" className="d-flex">
              <div className="dflexx align-items-center px-2">
                <FontAwesomeIcon icon={faUser} className="fafause" />{" "}
                <div className="p-3">
                  <h3 style={{ fontSize: "25px" }}>JOHN DOE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" className="d-flex">
              <div className="dflexx align-items-center px-2">
                <FontAwesomeIcon icon={faUser} className="fafause" />{" "}
                <div className="p-3">
                  <h3 style={{ fontSize: "25px" }}>JOHN DOE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" className="d-flex">
              <div className="dflexx align-items-center px-2">
                <FontAwesomeIcon icon={faUser} className="fafause" />{" "}
                <div className="p-3">
                  <h3 style={{ fontSize: "25px" }}>JOHN DOE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </p>
                </div>
              </div>
            </Col>

            {/* <Col lg="6" style={{ alignItems: "center" }}>
              <div className="p-3 pt-5">
                <h3 style={{ fontSize: "30px" }}>
                  Amazing Marketplace Website in
                  <span style={{ color: "#E45033", fontWeight: "bolder" }}>
                    Minutes ?
                  </span>
                </h3>
                <p className="pt-3">
                  Experience state-of-the-art marketplace platform with the
                  Exertio. We combine the experience of our global community
                  around the globe for a best marketplace theme. With Exertio,
                  you can develop a website for remote freelancers that will
                  provide their best to the clients who are looking for remote
                  resources.
                </p>
              </div>
              <Col lg="12" style={{ textAlign: "center" }} className="py-5">
                <button
                  className="btn button bg-danger text-white px-5"
                  style={{ fontSize: "15px" }}
                >
                  Read More{" "}
                </button>
              </Col>
            </Col> */}
          </Row>
        </Container>
      </Container>

      <Container>
        <div className="p-3 pt-5 text-center">
          <h3 style={{ fontSize: "50px" }}>Our Guarantee</h3>
          <p style={{ color: "#E45033", fontWeight: "bolder" }}>
            Book vendors with confidence,backed by our guarantee.
          </p>
        </div>

        <Row className="bg2 align-items-center">
          <Col>
            <div className="p-4 pt-2">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "75px", color: "#E9735C" }}
                />{" "}
              </div>
              <div className="text-left px-4">
                <h3 className="pt-3" style={{ fontSize: "30px" }}>
                  Vendor Assurance
                </h3>
                <p style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam,
                </p>
                <button
                  className="btn button bg-danger text-white mx-2"
                  style={{ fontSize: "10px" }}
                >
                  Load More{" "}
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div className="p-4 pt-2">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  style={{ fontSize: "75px", color: "#E9735C" }}
                />{" "}
              </div>
              <div className="text-left px-4">
                <h3 className="pt-3" style={{ fontSize: "30px" }}>
                  Payments Protection
                </h3>
                <p style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam,
                </p>
                <button
                  className="btn button bg-danger text-white mx-2"
                  style={{ fontSize: "10px" }}
                >
                  Load More{" "}
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div className="p-4 pt-2">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faHeadphonesAlt}
                  style={{ fontSize: "75px", color: "#E9735C" }}
                />{" "}
              </div>
              <div className="text-left px-4">
                <h3 className="pt-3" style={{ fontSize: "30px" }}>
                  Hand On Support
                </h3>
                <p style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam,
                </p>
                <button
                  className="btn button bg-danger text-white mx-2"
                  style={{ fontSize: "10px" }}
                >
                  Load More{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
