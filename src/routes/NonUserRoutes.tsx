import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import Login from "../pages/Login";

import { ReactNode } from "react";
import { AboutUs } from "../pages/AboutUs";
import { NavBar } from "../components/NavBar";
import ServiceDetails from "../pages/ServiceDetails";

interface NonUserRoutesProps {
  children: ReactNode;
}

export const NonUserRoutes: React.FC<NonUserRoutesProps> = ({ children }) => {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </NavBar>
      <div id="up"></div>
      <div id="down"></div>
      <div id="downMobile"></div>
      {children}
    </>
  );
};
