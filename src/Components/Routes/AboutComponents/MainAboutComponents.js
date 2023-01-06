import React from "react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMain from "../../Routes/assets/AboutMain.png";

export const MainAboutComponents = () => {
  return (
    <div>
      <div className="banner_main1">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <Row>
                    <div className="bg_white text-white text-center">
                      <h1>About Us</h1>
                      <div>
                        <p>Home / Freelancer Search</p>
                      </div>
                    </div>
                  </Row>

                  <div className="About_main_images_search">
                    <input placeholder="What Are You Looking For"></input>
                    <button className="d-flex justify-content-center align-items-center">
                      <p className="m-0 p-2">
                        <BsSearch />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="About-Market_Main_Page">
              <p className="About_Marketplace_title">
                Welcome To Exertio Marketplace WordPress Theme Start today for a
                great future
              </p>

              <p className="About_markeplace_body">
                Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est oluptatem quia voluptas
                si
              </p>

              <ul>
                <li>Unique home design art</li>
                <li>Interior design with love</li>
                <li>Experience with good</li>
              </ul>

              <button>
                <p>Learn More</p>
              </button>
            </div>
          </Col>

          <Col sm={12} md={6}>
            <div className="d-flex justify-content-center">
              <img src={AboutMain} style={{ width: "80%" }} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center my-5 responsive-making">
              <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <div>
                  <FontAwesomeIcon
                    style={{ color: "#C60000", fontSize: "45px" }}
                    icon={faMessage}
                  />{" "}
                </div>
                <div className="d-flex flex-column ">
                  <div className="d-flex About_Discount_prices">
                    <div>16100</div>
                    <div style={{ paddingTop: "13px ", fontSize: 16 }}>+</div>
                  </div>

                  <div className="About_Total_Sales">Total Sales</div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3 my-4">
                <div>
                  <FontAwesomeIcon
                    style={{ color: "#C60000", fontSize: "45px" }}
                    icon={faMessage}
                  />{" "}
                </div>
                <div className="d-flex flex-column ">
                  <div className="d-flex About_Discount_prices">
                    <div>5500</div>
                    <div style={{ paddingTop: "13px ", fontSize: 16 }}>+</div>
                  </div>

                  <div className="About_Total_Sales">Awards</div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3 my-3 _taking">
                <div>
                  <FontAwesomeIcon
                    style={{ color: "#C60000", fontSize: "45px" }}
                    icon={faMessage}
                  />{" "}
                </div>
                <div className="d-flex flex-column  ">
                  <div className="d-flex About_Discount_prices ">
                    <div>7000</div>
                    <div style={{ paddingTop: "13px ", fontSize: 16 }}>+</div>
                  </div>

                  <div className="About_Total_Sales">Positive Reviews</div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <div>
                  <FontAwesomeIcon
                    style={{ color: "#C60000", fontSize: "45px" }}
                    icon={faMessage}
                  />{" "}
                </div>
                <div className="d-flex flex-column ">
                  <div className="d-flex About_Discount_prices">
                    <div>4400</div>
                    <div style={{ paddingTop: "13px ", fontSize: 16 }}>+</div>
                  </div>

                  <div className="About_Total_Sales">Subscribe</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <p className="About_Marketplace_title">
                Choose A Right Plan For You
              </p>

              <p className="About_markeplace_body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt <br></br> ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation
              </p>
            </div>
          </Col>
        </Row>

        <div style={{ margin: "40px 0px" }}>
          <Row>
            <Col md={4} sm={12}>
              <div className="d-flex justify-content-end card-responsive">
                <div className="About_card_Priceing">
                  <p className="basic">Basic</p>
                  <p className="About_Card_title">
                    Go Pro, Best for the individuals
                  </p>

                  <p className="About_Card_Price">$15.00</p>

                  <button className="About_card_button">
                    <p>Purchase Now</p>
                  </button>

                  <div className="about_card_footer my-3">
                    <p>12 Project credits</p>
                    <p>10 Allowed Services</p>
                    <p>20 Days visibility</p>
                    <p>5 Featured Services</p>
                    <p>20 Featured Days visibility</p>
                    <p>30 Days Package Expiry</p>
                    <p>Profile Featured:</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="d-flex justify-content-center card-responsive">
                <div
                  className="About_card_Priceing"
                  style={{ backgroundColor: "#E9735C" }}
                >
                  <p className="basic" style={{ color: "white" }}>
                    Basic
                  </p>
                  <p className="About_Card_title" style={{ color: "white" }}>
                    Go Pro, Best for the individuals
                  </p>

                  <p className="About_Card_Price" style={{ color: "white" }}>
                    $15.00
                  </p>

                  <button
                    className="About_card_button "
                    style={{
                      backgroundColor: "#E9735C",
                      border: "1px solid white ",
                    }}
                  >
                    <p style={{ color: "white" }}>Purchase Now</p>
                  </button>

                  <div
                    className="about_card_footer my-3"
                    style={{ color: "white" }}
                  >
                    <p>12 Project credits</p>
                    <p>10 Allowed Services</p>
                    <p>20 Days visibility</p>
                    <p>5 Featured Services</p>
                    <p>20 Featured Days visibility</p>
                    <p>30 Days Package Expiry</p>
                    <p>Profile Featured:</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="d-flex justify-content-start card-responsive">
                <div className="About_card_Priceing">
                  <p className="basic">Basic</p>
                  <p className="About_Card_title">
                    Go Pro, Best for the individuals
                  </p>

                  <p className="About_Card_Price">$15.00</p>

                  <button className="About_card_button">
                    <p>Purchase Now</p>
                  </button>

                  <div className="about_card_footer my-3">
                    <p>12 Project credits</p>
                    <p>10 Allowed Services</p>
                    <p>20 Days visibility</p>
                    <p>5 Featured Services</p>
                    <p>20 Featured Days visibility</p>
                    <p>30 Days Package Expiry</p>
                    <p>Profile Featured:</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
