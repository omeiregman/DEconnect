import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import LoadingPage from "../../components/LoadingPage";

import SignInComponent from "../../components/Signin";
import LoginSidePaneComponent from "../../components/LoginSidePane";

import { Redirect } from "react-router-dom";

import "./css/auth.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        email: "",
        password: ""
      },
      errors: {},
      loading: false
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [name]: value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

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
    this.props.loginUser(data, this.props.history);
    // callApi("/auth", data, "POST")
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
    this.setState({
      code: data.code,
      errorMessage: "",
      loading: true
    });
  };

  handleFailure = error => {
    console.log(error);
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
      loading: false
    });
  };

  loginWithLinkedin = () => {
    this.setState({
      loading: true
    });
  };

  render() {
    const { inputs, loading } = this.state;

    return loading ? (
      <LoadingPage message="...authenticating with linkedin" />
    ) : (
      <div className="container-fluid" style={{ margin: 0, padding: 0, background: "rgba(113, 74, 255, 0.9)" }}>
        <div className="row">
          <div className="col-md-7 bounce-in-left" style={{ padding: 0 }}>
            <LoginSidePaneComponent />
          </div>
          <div className="col-md-5 bounce-in-right" style={{ padding: 0 }}>
            <SignInComponent
              onSuccess={this.handleSuccess}
              onFailure={this.handleFailure}
              redirectUri={`${window.location.origin}/linkedin`}
              scope="r_liteprofile r_emailaddress"
              clientId={process.env.REACT_APP_CLIENT_ID}
              inputs={inputs}
              onChange={this.onChange}
              onClick={this.loginWithLinkedin}
            />
          </div>
        </div>
      </div>
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
