import React from "react";
import LoadingSpinner from "./loader.svg";
import "./loadingpage.css";

const LoadingPage = () => (
  <div className="loading-spinner-container">
    {/* <img src={LoadingSpinner} /> */}
    <div>
      <i className="fa fa-spinner fa-spin" />
      <div>
        <p>...authenticating with Linkedin</p>
      </div>
    </div>
  </div>
);

export default LoadingPage;
