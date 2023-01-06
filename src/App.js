import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./Components/Topbar";
import { Footer } from "./Components/Footer";
import { BottomNav } from "./Components/BottomNav";
import { Home } from "./Components/Routes/Home";
import { DigitalMarketting } from "./Components/Routes/DigitalMarketting";
import { AppsDevelopment } from "./Components/Routes/AppsDevelopment";
import { VideoAnimation } from "./Components/Routes/VideoAnimation";
import { WrittingTranslation } from "./Components/Routes/WrittingTranslation";
import { DesignCreative } from "./Components/Routes/DesignCreative";
import { FacebookAds } from "./Components/Routes/FacebookAds";
import { HowItWorks } from "./Components/Routes/HowItWorks";
import { Contactus } from "./Components/Routes/Contactus";
import { Signin } from "./Components/Routes/Signin";
import { About } from "./Components/Routes/About";
import { TheProcess } from "./Components/Routes/TheProcess";
import { Signup } from "./Components/Routes/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/actions/userAction";

function App() {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, user]);

  return (
    <>
      <ToastContainer />
      <Topbar />
      <BottomNav />
      <Routes>
        {!user ? (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/HIT" element={<HowItWorks />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/DigitalMarketting" element={<DigitalMarketting />} />
            <Route path="/AppsDevelopment" element={<AppsDevelopment />} />
            <Route path="/VideoAnimation" element={<VideoAnimation />} />

            <Route
              path="/WrittingTranslation"
              element={<WrittingTranslation />}
            />
            <Route path="/DesignCreative" element={<DesignCreative />} />
            <Route path="/FacebookAds" element={<FacebookAds />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<TheProcess />} />
          </>
        )}

        {/* <Route path="/About" element={<About />} />
      <Route path="/ContactNow" element={<ContactNow />} />
      <Route path="/Apply" element={<ApplyNow />} />
      <Route path="/DocFees" element={<DocumentFees />} />
      <Route path="/ReferAFriend" element={<RefferFriend />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
      <Route path="/Agrement" element={<Agrement />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/loan" element={<LoanServices />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
