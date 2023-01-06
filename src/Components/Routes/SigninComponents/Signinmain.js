// import React from "react";
// import { Col, Container, Row, Image, FormCheck } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { BsSearch } from "react-icons/bs";
// import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../../redux/actions/userAction";

// export const Signinmain = () => {
//   return (
//     <Container fluid>
//       <div className="banner_main1">
//         <div>
//           <div>
//             <div>
//               <div className="container">
//                 <div>
//                   <div className="bg_white text-white text-center">
//                     <h1>Signin/Signup</h1>
//                     <div>
//                       <p>Home / Freelancer Search</p>
//                     </div>

//                     <Col lg="12" className="webkit">
//                       <Row>
//                         <Col>
//                           <div className="About_main_images_search">
//                             <input placeholder="What Are You Loking For"></input>
//                             <button className="d-flex justify-content-center align-items-center">
//                               <p className="m-0 p-2">
//                                 <BsSearch />
//                               </p>
//                             </button>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Col>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Container>
//         <Row>
//           <Col lg="12" style={{ textAlign: "center" }}>
//             <div
//               className="w-45 dflexxt text-white m-3"
//               style={{ boxShadow: "-5px 2px 11px 2px #6d6d6d" }}
//             >
//               <div style={{ background: "#E9735C" }}>
//                 <div className="p-4">
//                   <FontAwesomeIcon
//                     style={{
//                       color: "#E9735C",
//                       fontSize: "100px",
//                       padding: "27px",
//                       background: "white",
//                       borderRadius: "95px",
//                     }}
//                     icon={faUser}
//                   />
//                   <h3 style={{ fontSize: "25px", marginTop: "10px" }}>
//                     THANK YOU
//                   </h3>
//                 </div>
//                 <div style={{ background: "white", padding: "20px" }}>
//                   <div style={{ padding: "30px", background: "white" }}>
//                     <h1 className="hhh1 px-3">USER LOGIN</h1>
//                   </div>
//                   <Container>
//                     <Row className="py-3">
//                       <Col lg="12">
//                         <fieldset>
//                           <label style={{ width: "100%" }}>First name</label>
//                           <input
//                             style={{ width: "100%" }}
//                             className="form-control"
//                             type={"text"}
//                             name="firstname"
//                             //   value={user.name}
//                             //   onChange={getUserData}
//                             placeholder="Email or Username"
//                             required
//                           />
//                         </fieldset>
//                       </Col>

//                       <Col lg="12">
//                         <fieldset>
//                           <label style={{ width: "100%" }}>First name</label>
//                           <input
//                             style={{ width: "100%" }}
//                             className="form-control"
//                             type={"text"}
//                             name="firstname"
//                             //   value={user.name}
//                             //   onChange={getUserData}
//                             placeholder="Password"
//                             required
//                           />
//                         </fieldset>
//                       </Col>
//                     </Row>
//                   </Container>
//                   <h3
//                     style={{
//                       fontSize: "15px",
//                       color: "black",
//                       //   display: "flex",
//                       textAlign: "left",
//                     }}
//                   >
//                     <span style={{ display: "inline-flex" }}>
//                       <FormCheck color="blue" />
//                       &#160;&#160;Remember me
//                     </span>
//                     <span style={{ float: "right" }}>Forgot Password</span>
//                   </h3>
//                   <button
//                     // onClick={postData}
//                     type="submit"
//                     className="button mt-4"
//                     style={{
//                       padding: "12px",
//                       border: "1px solid black",
//                       borderRadius: "12px",
//                       width: "50%",
//                       fontSize: "30px",
//                     }}
//                   >
//                     LOGIN
//                   </button>

//                   <Link to="/signup">
//                     <p
//                       style={{
//                         fontSize: "15px",
//                         color: "black",
//                         padding: "10px",
//                       }}
//                     >
//                       Create Account
//                     </p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           <Col lg="12" className="p-2">
//             <div
//               className="p-3"
//               style={{ background: "#E6E7E8", borderRadius: "20px" }}
//             >
//               <h2 style={{ fontSize: "25px" }}>Ready To Get Started</h2>
//               <p>
//                 The Exertio is a Premium WordPress Theme, you can create your
//                 own market place website using this theme. It allows you to get
//                 a commission for hiring a freelancer or for each service sold.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, FormCheck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/userAction";

export const Signinmain = () => {
  const { error, user } = useSelector((state) => state?.user);
  console.log(error);
  console.log(user);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container fluid>
      <div className="banner_main1">
        <div>
          <div>
            <div>
              <div className="container">
                <div>
                  <div className="bg_white text-white text-center">
                    <h1>Signin/Signup</h1>
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
          <Col lg="12" style={{ textAlign: "center" }}>
            <div
              className="w-45 dflexxt text-white m-3"
              style={{ boxShadow: "-5px 2px 11px 2px #6d6d6d" }}
            >
              <div style={{ background: "#E9735C" }}>
                <div className="p-4">
                  <FontAwesomeIcon
                    style={{
                      color: "#E9735C",
                      fontSize: "100px",
                      padding: "27px",
                      background: "white",
                      borderRadius: "95px",
                    }}
                    icon={faUser}
                  />
                  <h3 style={{ fontSize: "25px", marginTop: "10px" }}>
                    THANK YOU
                  </h3>
                </div>
                <div style={{ background: "white", padding: "20px" }}>
                  <div style={{ padding: "30px", background: "white" }}>
                    <h1 className="hhh1 px-3">USER LOGIN</h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <Container>
                      <Row className="py-3">
                        <Col lg="12">
                          <fieldset>
                            <label style={{ width: "100%" }}>First name</label>
                            <input
                              ref={ref}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              style={{ width: "100%" }}
                              className="form-control"
                              type={"text"}
                              name="Eemail"
                              placeholder="Email or Username"
                              required
                            />
                          </fieldset>
                        </Col>

                        <Col lg="12">
                          <fieldset>
                            <label style={{ width: "100%" }}>First name</label>
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              style={{ width: "100%" }}
                              className="form-control"
                              type={"text"}
                              name="password"
                              placeholder="Password"
                              required
                            />
                          </fieldset>
                        </Col>
                      </Row>
                    </Container>
                    <h3
                      style={{
                        fontSize: "15px",
                        color: "black",
                        //   display: "flex",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ display: "inline-flex" }}>
                        <FormCheck color="blue" />
                        &#160;&#160;Remember me
                      </span>
                      <span style={{ float: "right" }}>Forgot Password</span>
                    </h3>
                    <button
                      type="submit"
                      className="button mt-4"
                      style={{
                        padding: "12px",
                        border: "1px solid black",
                        borderRadius: "12px",
                        width: "50%",
                        fontSize: "30px",
                      }}
                    >
                      LOGIN
                    </button>
                  </form>

                  <Link to="/signup">
                    <p
                      style={{
                        fontSize: "15px",
                        color: "black",
                        padding: "10px",
                      }}
                    >
                      Create Account
                    </p>
                  </Link>
                </div>
              </div>
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
