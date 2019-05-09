import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { BarLoader } from 'react-spinners';
import TextFieldGroup from '../common/TextFieldGroup';

import { Link, Redirect } from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      loading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        loading: false
      })
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
    }

    this.props.loginUser(userData);
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    //const { info } = this.props.location.state || { info: ""}

    if (this.props.auth.isAuthenticated) {
      return (<Redirect to={from} />)
    }

    const { errors } = this.state;

    return (
      <section className="login-pane">
        <div className="">
          <div className="row">
            <div className="col-sm-6">
              <div className="left-pane">

              </div>
            </div>
            <div className="col-sm-6 right-pane">
              <form noValidate onSubmit={this.onSubmit}>
                <h3>Welcome back,</h3>
                <br></br>
                <h4>Please Sign In to Continue</h4>
                <p>email</p>
                <TextFieldGroup
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email} />

                <p>password</p>
                <TextFieldGroup
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password} />

                <p className="extra-note"><Link to='/signin'>forgot password?</Link></p>
                <br></br>
                <div>
                  <BarLoader
                    color={'#FBB062'}
                    loading={this.state.loading}
                    width={218}
                  />
                </div>
                <input type="submit" value="Sign In" />
                <br></br>
                <p>New to APP? <Link to='/signup'>Sign Up</Link></p>
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
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(Signin);
