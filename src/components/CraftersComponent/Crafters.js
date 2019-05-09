import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCrafters } from './../../actions/crafterActions';
import { PulseLoader } from 'react-spinners';

import CrafterHeader from './CrafterHeader';
import CrafterCard from './CrafterCard';
import img_profile from './img/profileimage.png';

import './css/crafters.css';


class Crafters extends Component {
  

  componentDidMount() {
      this.props.getAllCrafters();
  }

  render() {

    const { loading, allCrafters } = this.props.crafter;
    let allCraftersList;

    if(loading) {
      return(
        <div className="loader">
            <span>
              <PulseLoader
              color={'#EA5800'}
              loading={loading}
              />
            </span>
            <p>Loading Crafters</p>
        </div>
      );
    } else {
      if (allCrafters.length > 0) {
        allCraftersList = allCrafters.map((crafter) => {
          return <CrafterCard
                  key={crafter._id}
                  url={crafter.handle}
                  name={crafter.user.name}
                  location={crafter.location}
                  bio={crafter.bio}
                  majorCraft={crafter.status}
                  
                  instagram={crafter.instagram}
                  facebook={crafter.facebook}
                  youtube={crafter.youtubee}
                  twitter={crafter.twitter}
                  profileImage={img_profile}
                  />
        })
      }
    }

    

    return(
      <section className="crafter-home">
      <CrafterHeader/>

      <div className="crafter-status">
      {this.props.auth.isAuthenticated ? (<Link to='crafters/register'><button>Register as a Crafter</button></Link>)
             : (<Link to={{ pathname: '/signin', state: { from: `/crafters/register`, info:"You need to be Signed in to Register as a Crafter" }}}>
             <button>Register as a Crafter</button>
                    </Link>)}

      {this.props.auth.isAuthenticated ? (<Link to='crafters/dashboard'><button>Go to your Dashboard</button></Link>)
         : (<Link to={{ pathname: '/signin', state: { from: `/crafters/dashboard`, info:"Please Sign In to access your Craft Profile" }}}>
                    <button>Go to your Dashboard</button>
                           </Link>)}
      <br></br>
      <br></br>
    </div>

      
      <div className="container">

          <div className="row">
            <div className="col-md-8">
              {allCraftersList}
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
   
      </div>
      </section>
    )
  }
}


Crafters.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllCrafters: PropTypes.func.isRequired,
  allCrafters: PropTypes.object,
  crafter: PropTypes.object
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  crafter: state.crafter
});

export default connect(mapStateToProps, { getAllCrafters })(Crafters);