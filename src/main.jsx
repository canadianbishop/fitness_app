import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpPage from "./pages/signUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUpPage/>}/>
      <Route path="login" element={<SignIn/>}/>
      <Route path="/home" element  = {<Home/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
