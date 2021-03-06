import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "swiper/swiper-bundle.css";
import Pages from "./pages/Pages";
import UserProvider from "./context/UserContext";
import ErrorBoundary from "./components/Error";

ReactDOM.render(
  <UserProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ErrorBoundary>
  </UserProvider>,
  document.getElementById("root")
);
