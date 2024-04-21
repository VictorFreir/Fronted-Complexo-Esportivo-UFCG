import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTP from "./pages/otp";
import RedefinePassword from "./pages/redefine-password";
import NewPassword from "./pages/redefine-password/new-password";
import OkEmailPage from "./pages/email-check";
import ErrorPage from "./pages/wrong-code";
import RedefinePasswordCheck from "./pages/new-password-check";
import RegisterCourt from "./pages/court/registerCourt";
import SideBar from "./pages/navbar";
import SimpleSideBar from "./pages/simple-navbar";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/otp" element={<OTP />} />
        <Route path="/redefine-password" element={<RedefinePassword />} />
        <Route path="/new-password" element={<NewPassword />}>
          {" "}
        </Route>
        <Route path="/email-check" element={<OkEmailPage />} />
        <Route path="/wrong-code" element={<ErrorPage />} />
        <Route path="/new-password-check" element={<RedefinePasswordCheck />} />
        <Route path="/register-court" element={<RegisterCourt />} />
        <Route path="/navbar" element={<SideBar />} />
        <Route path="/simple-navbar" element={<SimpleSideBar />} />
        {/* <Route path="/listar-quadras" element={<ListarQuadras/>} /> */}
      </Routes>
    </Router>
  );
}

export default Rotas;
