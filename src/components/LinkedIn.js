import React, { Component } from "react";
import PropTypes from "prop-types";

export class LinkedIn extends Component {
  static propTypes = {
    className: PropTypes.string,
    onFailure: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired
  };

  componentWillUnmount() {
    window.removeEventListener("message", this.receiveMessage, false);
    if (this.popup && !this.popup.closed) this.popup.close();
  }

  getUrl = () => {
    const { redirectUri, clientId, state, scope } = this.props;
    // TODO: Support IE 11
    const scopeParam = scope ? `&scope=${encodeURI(scope)}` : "";

    const linkedInAuthenLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}${scopeParam}`;
    // const linkedInAuthenLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
    //   process.env.REACT_APP_CLIENT_ID
    // }&scope=r_basicprofile&state=123456&redirect_uri=${
    //   process.env.REACT_APP_REDIRECT_URI
    // }`;
    return linkedInAuthenLink;
  };

  receiveMessage = event => {
    if (event.origin === window.location.origin) {
      console.log("event data:", event.data);
      if (event.data.errorMessage && event.data.from === "Linked In") {
        this.props.onFailure(event.data);
        this.popup && this.popup.close();
      } else if (event.data.code && event.data.from === "Linked In") {
        this.props.onSuccess({ code: event.data.code });
        this.popup && this.popup.close();
      }
    }
  };

  handleConnectLinkedInClick = e => {
    console.log("handleConnectLinkedInClick");
    if (e) {
      e.preventDefault();
    }
    this.props.onClick && this.props.onClick();
    this.popup = window.open(this.getUrl(), "_blank", "width=600,height=600");
    window.addEventListener("message", this.receiveMessage, false);
  };

  render() {
    return (
      <button
        type="button"
        className="linkedin-button"
        onClick={this.handleConnectLinkedInClick}
      >
        Login with Linkedin
      </button>
    );
  }
}

LinkedIn.defaultProps = {
  disabled: false,
  state: "fdsf78fyds7fm"
};
export default LinkedIn;
