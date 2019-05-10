import React from "react";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import LinkedIn from "../LinkedIn";
import "./signup.css";

const SignInComponent = ({ handleSuccess, handleFailure }) => (
  <div className="signup-container">
    <div className="form-container">
      <p className="center">Join us to meet the rest of the world</p>
      <form noValidate>
        <p>first name</p>
        <TextFieldGroup
          name="firstName"
          type="text"
          // value={this.state.password}
          // onChange={this.onChange}
          // error={errors.password}
        />
        <br />
        <p>last name</p>
        <TextFieldGroup
          name="lastName"
          type="text"
          // value={this.state.password}
          // onChange={this.onChange}
          // error={errors.password}
        />
        <br />
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
        <button className="login-button"> Sign up </button>
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
        <Link to="/signin">
          Already have an account <span>Sign in</span>
        </Link>
      </div>
    </div>
  </div>
);

export default SignInComponent;
