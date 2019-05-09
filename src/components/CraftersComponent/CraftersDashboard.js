import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCrafter, deleteAccount } from '../../actions/crafterActions';
import { PulseLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import CrafterActions from './CrafterDashbordActions'; 

import './css/crafters.css';
import CrafterHeader from './CrafterHeader';

class CraftersDashboard extends Component {
  componentDidMount() {
    this.props.getCurrentCrafter();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { crafter, loading } = this.props.crafter;

    let dashboardContent;

    if(crafter === null || loading) {
        dashboardContent = <div className="event-loader">
          <span><PulseLoader
          color={'#EA5800'}
          loading={loading}
        /></span>
        <p>Loading Profile</p>
      </div>
    } else {
      //Check if logged in user has a crafters profile
      if(Object.keys(crafter).length > 0) {
        dashboardContent = 
        <div>
        <p className="">Welcome <Link to={`/crafter/${crafter.handle}`} >{user.name}</Link>,</p>
        <CrafterActions />

        <div style={{ marginBottom: '60px' }}></div>
        {/*<button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>Delete My Account</button>*/}
        </div>
      } else {
        //User is logged in but has no crafters profile
        dashboardContent = <div>
          <h3 className="">Hello {user.name}, you are not registered as a crafter yet....</h3>
          <Link to="/crafters/register" className="btn-reg-crafter">Register as a Crafter</Link>
          <br></br>
          <br></br>
        </div>
      }
    }

    return (
      <section>
        <CrafterHeader/>
        <div className="container">
          {dashboardContent}
        </div>
      </section>
    );
  }
}

CraftersDashboard.propTypes = {
  getCurrentCrafter: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  crafter: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentCrafter, deleteAccount })(CraftersDashboard);
