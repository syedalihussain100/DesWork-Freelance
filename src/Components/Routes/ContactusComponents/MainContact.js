import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
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

export const MainContact = () => {
  return (
    <Container fluid>
      <div className="banner_main1">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <div className="bg_white text-white text-center">
                    <h1>Contact Us</h1>
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
        <Row>
          <Col lg="12" className="Contactform ">
            <form method="POST">
              <div className="mb-5 mt-5 text-left ccc">
                <h3 style={{ fontSize: "30px" }}>Drop Us a Line</h3>
                <p>
                  If you have a query to ask, or have question in your mind feel
                  free to send us email using this form. Our team will be
                  getting back to you soon
                </p>
                <Row className="py-3">
                  <Col lg="6">
                    <fieldset>
                      <label style={{ width: "100%" }}>First name</label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        type={"text"}
                        name="firstname"
                        //   value={user.name}
                        //   onChange={getUserData}
                        placeholder="Your Name"
                        required
                      />
                    </fieldset>
                  </Col>
                  <Col lg="6">
                    <fieldset>
                      <label style={{ width: "100%" }}>Last name</label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        type={"text"}
                        name="lastname"
                        //   value={user.email}
                        //   onChange={getUserData}
                        placeholder="Your Name"
                        required
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label style={{ width: "100%" }}>Email</label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="Email"
                        type={"email"}
                        //   value={user.number}
                        //   onChange={getUserData}
                        placeholder="Your Email"
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label style={{ width: "100%" }}>Contact Number</label>
                      <input
                        style={{ width: "100%" }}
                        type={"number"}
                        className="form-control"
                        name="number"
                        //   value={user.subject}
                        //   onChange={getUserData}
                        placeholder="Your Number"
                      />
                    </fieldset>
                  </Col>
                  <Col lg="6">
                    <fieldset>
                      <label style={{ width: "100%" }}>
                        Address
                        {/* <input style={{width:"100%"}} className='form-control' name="name" value={user.name} onChange={getUserData} placeholder='Name' /> */}
                      </label>
                      <input
                        style={{ width: "100%" }}
                        type={"text"}
                        className="form-control"
                        name="address"
                        //   value={user.subject}
                        //   onChange={getUserData}
                        placeholder="Address"
                      />
                      {/* <textarea
                          style={{ width: "100%" }}
                          className="form-control"
                          name="message"
                          //   value={user.message}
                          //   onChange={getUserData}
                          placeholder="message"
                        ></textarea> */}
                    </fieldset>
                  </Col>
                  <Col lg="6">
                    <fieldset>
                      <label style={{ width: "100%" }}>State</label>
                      <input
                        style={{ width: "100%" }}
                        type={"text"}
                        className="form-control"
                        name="state"
                        placeholder="State"
                      />
                    </fieldset>
                  </Col>
                  <Col lg="6">
                    <fieldset>
                      <label style={{ width: "100%" }}>Password</label>
                      <input
                        style={{ width: "100%" }}
                        type={"password"}
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                    </fieldset>
                  </Col>
                  {/* <Col lg="6">
      <fieldset>
         <label style={{width:"100%"}}>
           <input style={{width:"100%"}} className='form-control' name="number" type={'number'} value={user.name} onChange={getUserData} placeholder='Contact Number' />
         </label>
       </fieldset>
      </Col> */}
                  <Col lg="6" style={{ textAlign: "center" }}>
                    <div
                      style={{ textAlign: "center" }}
                      className="py-3 dflexx"
                    >
                      <button
                        // onClick={postData}
                        type="submit"
                        className="button mx-3 mt-4"
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          width: "50%",
                        }}
                      >
                        Save
                      </button>
                      <button
                        // onClick={postData}
                        type="submit"
                        className="button mt-4"
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          width: "50%",
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
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
