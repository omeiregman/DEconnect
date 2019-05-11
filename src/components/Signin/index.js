import React from "react";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import LinkedIn from "../LinkedIn";
import "./signin.css";

const SignInComponent = ({
  onSuccess,
  onFailure,
  inputs,
  onChange,
  onClick
}) => {
  return (
    <div className="signin-container">
      <div className="form-container">
        <p className="center">Sign In to ...</p>
        <form noValidate>
          <p>email</p>
          <TextFieldGroup
            name="email"
            type="text"
            value={inputs.email}
            onChange={onChange}
          />
          <br />
          <p>password</p>
          <TextFieldGroup
            name="password"
            type="password"
            value={inputs.password}
            onChange={onChange}
          />
        </form>
        <br />
        <br />
        <div className="login-button-group">
          <button className="login-button"> Login </button>
          <br />
          <br />
          <br />
          <LinkedIn
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri={`${window.location.origin}/linkedin`}
            scope="r_liteprofile r_emailaddress"
            clientId={process.env.REACT_APP_CLIENT_ID}
            onClick={onClick}
          />
          <br />
          <br />
          <br />
          <Link to="/signup">
            Don't have an account? <span>Join us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
