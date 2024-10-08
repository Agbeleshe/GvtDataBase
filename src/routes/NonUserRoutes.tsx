import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import { ReactNode } from "react";
import { AboutUs } from "../pages/AboutUs";
import { NavBar } from "../components/NavBar";
import ServiceDetails from "../pages/ServiceDetails";
import Signup from "../pages/CreateUser";

interface NonUserRoutesProps {
  children: ReactNode;
}

export const NonUserRoutes: React.FC<NonUserRoutesProps> = ({ children }) => {

  return (
    <>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </NavBar>
      <div>
        <div
          style={{
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            position: "fixed",
            backgroundColor: "trasparent",
            top: "0px",
            zIndex: -1,
          }}
        >
          <div id="up"></div>
        </div>
      </div>
      {children}
    </>
  );
};
