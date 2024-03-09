import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();