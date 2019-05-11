import React from "react";
import LoadingSpinner from "./loader.svg";
import "./loadingpage.css";

const LoadingPage = ({ message }) => (
  <div className="loading-spinner-container pulse">
    {/* <img src={LoadingSpinner} /> */}
    <div>
      <i className="fa fa-spinner fa-spin" />
      <div>
        <p> {message ? message : "...loading"}</p>
      </div>
    </div>
  </div>
);

export default LoadingPage;
