import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { BarLoader } from "react-spinners";
import TextFieldGroup from "../common/TextFieldGroup";
import LinkedIn from "../../components/LinkedIn";
import { callApi } from "../../utils";

import { Link, Redirect } from "react-router-dom";

import "./css/auth.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      loading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  requestProfile = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&scope=r_basicprofile&state=123456&redirect_uri=${
      process.env.REACT_APP_REDIRECT_URI
    }`;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

  handleSuccess = data => {
    console.log(data);
    callApi("/auth", data, "POST")
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
    this.setState({
      code: data.code,
      errorMessage: ""
    });
  };

  handleFailure = error => {
    console.log(error);
    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    //const { info } = this.props.location.state || { info: ""}

    if (this.props.auth.isAuthenticated) {
      return <Redirect to={from} />;
    }

    const { errors } = this.state;

    return (
      <section className="login-pane">
        <div className="h-100">
          <div className="row">
            <div className="col-sm-6">
              <div className="left-pane" />
            </div>
            <div className="col-sm-6 right-pane">
              <form noValidate onSubmit={this.onSubmit}>
                <h3>Welcome back,</h3>
                <br />
                <h4>Please Sign In to Continue</h4>
                <p>email</p>
                <TextFieldGroup
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <p>password</p>
                <TextFieldGroup
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <p className="extra-note">
                  <Link to="/signin">forgot password?</Link>
                </p>
                <br />
                <div>
                  <BarLoader
                    color={"#FBB062"}
                    loading={this.state.loading}
                    width={218}
                  />
                </div>
                <input type="submit" value="Sign In" />
                <br />
                <LinkedIn
                  onSuccess={this.handleSuccess}
                  onFailure={this.handleFailure}
                  redirectUri={`${window.location.origin}/linkedin`}
                  scope="r_liteprofile r_emailaddress"
                  clientId={process.env.REACT_APP_CLIENT_ID}
                  // redirectUri={process.env.REACT_APP_REDIRECT_URI}
                />
                <p>
                  New to APP? <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Signin);
