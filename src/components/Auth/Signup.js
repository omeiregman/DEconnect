import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { callApi } from "../../utils";

import SignUpComponent from "../../components/Signup";
import LoginSidePaneComponent from "../../components/LoginSidePane";

import { Redirect } from "react-router-dom";

import "./css/auth.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      },
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
    const { inputs } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (this.props.auth.isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row">
          <div className="col-md-7 bounce-in-left" style={{ padding: 0 }}>
            <LoginSidePaneComponent />
          </div>
          <div className="col-md-5 bounce-in-right" style={{ padding: 0 }}>
            <SignUpComponent
              onSuccess={this.handleSuccess}
              onFailure={this.handleFailure}
              redirectUri={`${window.location.origin}/linkedin`}
              scope="r_liteprofile r_emailaddress"
              clientId={process.env.REACT_APP_CLIENT_ID}
              inputs={inputs}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);
