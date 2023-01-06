import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Components/BotNav.css";

export const BottomNav = () => {
  return (
    <>
      <Navbar expand="lg" id="bot" style={{ background: "#2E2E2E" }}>
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="navbar"
            style={{ justifyContent: "center" }}
          >
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="DigitalMarketting" className="nav-link">
                Digital Marketting
              </Link>
              <Link to="AppsDevelopment" className="nav-link">
                Apps Developments
              </Link>
              <Link to="VideoAnimation" className="nav-link">
                Video & Animation
              </Link>
              <Link to="WrittingTranslation" className="nav-link">
                Writting & Translation
              </Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link to="DesignCreative" className="nav-link">
                Design & Creative
              </Link>
              <Link to="FacebookAds" className="nav-link">
                Facebook Ads
              </Link>
              {/* <Nav.Link href="#">pages</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
