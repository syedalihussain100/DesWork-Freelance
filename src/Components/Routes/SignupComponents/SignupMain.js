import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "react-dropzone-uploader/dist/styles.css";
import { BsSearch } from "react-icons/bs";
import {
  BrowserRouter as Route,
  Router,
  Link,
  Switch,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/userAction";
import { v4 } from "uuid";
import { storage } from "../../../firebase";
import {ref,uploadBytes} from "firebase/storage"




export const SignupMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avator, setAvator] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  console.log(avator);

  const [values, setValues] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    Password: "",
    Category: "",
    RateType: "",
    UserType: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = async () => {
    if (
      !values.FullName ||
      !values.Email ||
      !values.PhoneNumber ||
      !values.Category ||
      !values.Address ||
      !values.Password ||
      !values.RateType ||
      !values.UserType
    ) {
      setErrorMsg("Fill All Fields");
      return;
    }
    setErrorMsg("");

    dispatch(
      register(
        values.Email,
        values.Password,
        values.FullName,
        values.Email,
        values.Category,
        values.PhoneNumber,
        values.Address,
        values.RateType,
        values.UserType
      )
    );
    imageUpload()
  };

  const imageUpload = () =>{
    const imageRef = ref(storage, `images/${avator + v4()}`);

    uploadBytes(imageRef,avator).then(()=>{
      console.log("image uploaded")
    })
  }

  const data = [
    {
      id: 0,
      categoryName: "zero",
    },
    {
      id: 1,
      categoryName: "one",
    },
    {
      id: 2,
      categoryName: "two",
    },
    {
      id: 3,
      categoryName: "three",
    },
  ];

  const data1 = [
    {
      id: 0,
      rate: "Fixed",
    },
    {
      id: 1,
      rate: "Hourly",
    },
  ];

  const data2 = [
    {
      id: 0,
      usertype: "Customer",
    },
    {
      id: 1,
      usertype: "Individual",
    },
    { id: 2, usertype: "Company" },
  ];

  // const MyUploader = () => {
  //   // specify upload params and url for your files
  //   const getUploadParams = ({ meta }) => {
  //     return { url: "https://httpbin.org/post" };
  //   };

  //   // called every time a file's `status` changes
  //   const handleChangeStatus = ({ meta, file }, status) => {
  //     console.log(status, meta, file);
  //   };

  //   // receives array of files that are done uploading when submit button is clicked
  //   const handleSubmit = (files, allFiles) => {
  //     console.log(files.map((f) => f.meta));
  //     allFiles.forEach((f) => f.remove());
  //   };

  //   return (
  //     <Dropzone
  //       getUploadParams={getUploadParams}
  //       onChangeStatus={handleChangeStatus}
  //       onSubmit={handleSubmit}
  //       accept="image/*,audio/*,video/*"
  //     />
  //   );
  // };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvator(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
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
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                    className="form-control"
                  />
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "300px",
                        marginTop: "10px",
                      }}
                      alt="logo"
                    />
                  ) : null}
                  {/* <MyUploader /> */}

                  <h3 style={{ fontSize: "25px", marginTop: "10px" }}>
                    THANK YOU
                  </h3>
                </div>
                <div style={{ background: "white", padding: "20px" }}>
                  <div style={{ padding: "30px", background: "white" }}>
                    <h1 className="hhh1 px-3">USER SIGNUP</h1>
                  </div>
                  <Container>
                    <Row className="py-3">
                      <Col lg="12">
                        <fieldset>
                          <br />
                          {/* <label style={{ width: "100%" }}>First name</label> */}
                          <input
                            style={{ width: "100%" }}
                            className="form-control"
                            type={"text"}
                            name="name"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                FullName: event.target.value,
                              }))
                            }
                            //   value={user.name}
                            //   onChange={getUserData}
                            placeholder="Full Name"
                            required
                          />
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          {/* <label style={{ width: "100%" }}>Email</label> */}
                          <input
                            style={{ width: "100%" }}
                            className="form-control"
                            type={"text"}
                            name="email"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                Email: event.target.value,
                              }))
                            }
                            //   value={user.name}
                            //   onChange={getUserData}
                            placeholder="Your Email"
                            required
                          />
                        </fieldset>
                      </Col>
                      <Col>
                        <fieldset>
                          <br />
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                Category: event.target.value,
                              }))
                            }
                          >
                            <option>Select Category</option>
                            {data.map((data) => (
                              <option key={data.id}>{data.categoryName}</option>
                            ))}
                            {/* <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option> */}
                          </Form.Select>
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          {/* <label style={{ width: "100%" }}>First name</label> */}
                          <input
                            style={{ width: "100%" }}
                            className="form-control"
                            type={"number"}
                            name="number"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                PhoneNumber: event.target.value,
                              }))
                            }
                            //   value={user.name}
                            //   onChange={getUserData}
                            placeholder="Phone Number"
                            required
                          />
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                RateType: event.target.value,
                              }))
                            }
                          >
                            <option>Rate Type</option>
                            {data1.map((data) => (
                              <option key={data1.id}>{data.rate}</option>
                            ))}
                            {/* <option value="3">Three</option> */}
                          </Form.Select>
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          <textarea
                            style={{ width: "100%" }}
                            className="form-control"
                            name="address"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                Address: event.target.value,
                              }))
                            }
                            // value={user.message}
                            // onChange={getUserData}
                            placeholder="Address"
                          ></textarea>
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                UserType: event.target.value,
                              }))
                            }
                          >
                            <option>Who Are You</option>
                            {data2.map((data) => (
                              <option key={data2.id}>{data.usertype}</option>
                            ))}
                          </Form.Select>
                        </fieldset>
                      </Col>
                      <Col lg="12">
                        <fieldset>
                          <br />
                          {/* <label style={{ width: "100%" }}>First name</label> */}
                          <input
                            style={{ width: "100%" }}
                            className="form-control"
                            type={"text"}
                            name="pass"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                Password: event.target.value,
                              }))
                            }
                            //   value={user.name}
                            //   onChange={getUserData}
                            placeholder="Password"
                            required
                          />
                        </fieldset>
                        <b
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "0.875rem",
                          }}
                        >
                          {errorMsg}
                        </b>
                      </Col>
                    </Row>
                  </Container>
                  {/* <h3
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
                  </h3> */}
                  <button
                    onClick={handleSubmission}
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
                    Sign Up
                  </button>
                  <Link to="/signin">
                    <p
                      style={{
                        fontSize: "15px",
                        color: "black",
                        padding: "10px",
                      }}
                    >
                      Already have an account
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
