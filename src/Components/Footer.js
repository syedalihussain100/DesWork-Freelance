import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <MDBFooter
      className="text-left"
      color="white"
      style={{ backgroundColor: "black", marginTop: "20px" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol
              lg="3"
              md="6"
              className="d-flex justify-content-center py-5"
            >
              <Image
                src={require("./Routes/assets/logo2.png")}
                style={{ height: "auto", objectFit: "cover", width: "100%" }}
              />
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-left">
              <h2 className="text-uppercase py-3" style={{ fontSize: "25px" }}>
                GET STARTED
              </h2>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to={"about"} className="text-white">
                    Trending skills
                  </Link>
                </li>
                <li>
                  <Link to={"ContactNow"} className="text-white">
                    Designer
                  </Link>
                </li>
                <li>
                  <Link to={"DocFees"} className="text-white">
                    Support Agent
                  </Link>
                </li>
                <li>
                  <Link to={"loan"} className="text-white">
                    Android Developer
                  </Link>
                </li>
                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    IOS Developer
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    IOS Developer
                  </Link>
                </li>
                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    View More
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-left">
              <h2 className="text-uppercase py-3" style={{ fontSize: "25px" }}>
                GET STARTED
              </h2>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to={"about"} className="text-white">
                    Workers From
                  </Link>
                </li>
                <li>
                  <Link to={"ContactNow"} className="text-white">
                    Australia
                  </Link>
                </li>
                <li>
                  <Link to={"DocFees"} className="text-white">
                    Germany
                  </Link>
                </li>
                <li>
                  <Link to={"loan"} className="text-white">
                    Frankfurt
                  </Link>
                </li>
                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    Pakistan
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    Arad, Bahrain
                  </Link>
                </li>

                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    Sharjah
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    View More
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-left">
              <h5 className="text-uppercase py-3" style={{ fontSize: "25px" }}>
                FINDERS, INC.
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to={"about"} className="text-white">
                    Top Skills in US
                  </Link>
                </li>
                <li>
                  <Link to={"ContactNow"} className="text-white">
                    Content writter
                  </Link>
                </li>
                <li>
                  <Link to={"DocFees"} className="text-white">
                    Musician
                  </Link>
                </li>
                <li>
                  <Link to={"loan"} className="text-white">
                    IOS Developer
                  </Link>
                </li>
                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    Android Developer
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    Video Editor
                  </Link>
                </li>

                <li>
                  <Link to={"ReferAFriend"} className="text-white">
                    Data Entry
                  </Link>
                </li>
                <li>
                  <Link to={"Apply"} className="text-white">
                    View More
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center pt-5 divReverse">
              <MDBCol md="12" className="text-center">
                <p className="pt-2">
                  <strong style={{ fontSize: "14px" }}>
                    Copyright © 2022. Desk Work Solution.
                  </strong>
                </p>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
};
