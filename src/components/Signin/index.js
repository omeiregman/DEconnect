import React from "react";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import LinkedIn from "../LinkedIn";
import "./signin.css";

const SignInComponent = ({ handleSuccess, handleFailure }) => (
  <div className="signin-container">
    <div className="form-container">
      <p className="center">Sign In to meet the rest of the world</p>
      <form noValidate>
        <p>email</p>
        <TextFieldGroup
          name="email"
          type="text"
          // value={this.state.password}
          // onChange={this.onChange}
          // error={errors.password}
        />
        <br />
        <p>password</p>
        <TextFieldGroup
          name="password"
          type="password"
          // value={this.state.password}
          // onChange={this.onChange}
          // error={errors.password}
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
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          redirectUri={`${window.location.origin}/linkedin`}
          scope="r_liteprofile r_emailaddress"
          clientId={process.env.REACT_APP_CLIENT_ID}
          // redirectUri={process.env.REACT_APP_REDIRECT_URI}
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

export default SignInComponent;
