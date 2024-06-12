import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import BusinessCreate from "./pages/BusinessCreateAcc/BusineesCreate.jsx";
import Createaccount from "./pages/UserCreateAccount/Createaccount.jsx";
import ErrorPage from "./pages/Erropage/Erropage.jsx";
import LoggedUser from "./pages/loggedUser/loggedUser.jsx";
import User from "./pages/User/User.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<LoggedUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CriarConta" element={<Createaccount />} />
        <Route path="/CriarCempresa" element={<BusinessCreate />} />
        <Route path="/User" element={<User />} />
        <Route
          path="*"
          element={<ErrorPage error={{ message: "Página não encontrada" }} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
