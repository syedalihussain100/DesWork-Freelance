import React from "react";
// import BannerImg from "../Routes/assets/banner2.png";
// import "./Browser.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import Img1 from "../../Routes/assets/Img1.png";
import Img2 from "../../Routes/assets/Img2.png";
import Img3 from "../../Routes/assets/Img3.png";
import a1Img from "../../Routes/assets/a1Img.png";
import a2Img from "../../Routes/assets/a2Img.png";
import a3Img from "../../Routes/assets/a3Img.png";
import { BsSearch } from "react-icons/bs";

export const MainProcess = () => {
  return (
    <Container fluid>
      <div className="banner_main1">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <div className="bg_white text-white text-center">
                    <h1>The Process</h1>
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
      {/* second container */}
      <Container>
        <div className="second_container">
          <div>
            <img src={Img1} alt="logo" className="a1" />
          </div>
          <div className="second_w">
            <h3 className="h3_style">
              Use The Exertio & Start Exploring, to Earn Business
            </h3>
            <p className="p_style">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
            <button className="free_btn">Create Account</button>
          </div>
        </div>
      </Container>
      {/* third container */}
      <div className="third_container">
        <div className="second_w">
          <h3 className="h3_style">
            Make Profit and Help People to Get Their Jobs Done
          </h3>
          <p style={{ marginTop: "30px" }}>
            A collection of textile samples lay spread out on the table - Samsa
            was a travelling salesman - and above it there hung a picture that
            he had recently cut out of an illustrated magazine and housed in a
            nice, gilded frame. It showed a lady fitted out with a fur hat and
            fur boa who sat upright..
          </p>
          <button className="free_btn">Post Projects</button>
        </div>
        <div>
          <img src={Img2} alt="logo" className="a1" />
        </div>
      </div>

      {/* four container */}

      <div className="third_container">
        <div>
          <img src={Img3} alt="logo" className="a1" />
        </div>
        <div className="second_w">
          <h3 className="h3_style">
            Freelancers to Get Profits Doing the Work they Like
          </h3>
          <p style={{ marginTop: "30px" }}>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack.
          </p>
          <button className="free_btn">Office Service</button>
        </div>
      </div>

      {/* service expert */}

      <div className="third_service">
        <div className="third_service_container">
          <div>
            <h3 className="h3_style">We Provide Stable Service With Experts</h3>
            <h5 style={{ margin: "30px auto" }}>
              Freelancers around the globe, are looking for work and provide the
              best they have. Start now
            </h5>

            <div style={{ marginTop: "30px" }}>
              <button className="servicebtn1">New Project</button>
              <button className="servicebtn2">Post Service</button>
            </div>
          </div>
        </div>
      </div>
      {/* offer */}
      <Container>
        <div style={{ margin: "60px 0px" }}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "35px" }}>
              What We Offer
            </h3>
            <h5>Freelancing talent at your fingertips at a reasonable cost</h5>
          </div>

          <div className="offer_container_box dflexx">
            <div className="service1">
              <div className="iconCon">
                <img src={a1Img} alt="logo" className="icon1" />
              </div>
              <div className="offer_paraContainer">
                <p className="h1">International Classmates</p>
                <p className="p1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                </p>
              </div>
              <button className="service_btn">Read More</button>
            </div>

            <div className="service1 servivebg">
              <div>
                <div className="iconCon">
                  <img src={a2Img} alt="logo" className="icon1" />
                </div>
              </div>
              <div className="offer_paraContainer">
                <p className="h1 h1_service">International Classmates</p>
                <p className="p1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                </p>
              </div>
              <button className="service_btn myservice_btn">Read More</button>
            </div>

            <div className="service1">
              <div>
                <div className="iconCon">
                  <img src={a3Img} alt="logo" className="icon1" />
                </div>
              </div>

              <div className="offer_paraContainer">
                <p className="h1">International Classmates</p>
                <p className="p1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                </p>
              </div>
              <button className="service_btn">Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
