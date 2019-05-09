import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import './css/crafters.css';


const CrafterCard = ({
    id,
    url,
    name,
    location,
    majorCraft,
    bio,
    website,
    instagram,
    facebook,
    youtube,
    twitter,
    profileImage
}) => {
    return( 
        <section>
        <div className="row crafter-card">
            <div className="col-sm-2">
                <img className="profile-image" src={profileImage} alt="profile" />
            </div>
            <div className="profile-info col-sm-6">
                <h2>{name}</h2>
                <small>{majorCraft}</small><span className="location"><i className="fas fa-map-marker-alt"></i><span>{location}</span></span>
                <br></br>
                <p>{bio}</p>
            </div>
            <div className="profile-links col-sm-4">
                <i className="fas fa-desktop"></i>
                <br></br>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <br></br>
                <Link to={`/crafter/${url}`}><input className="profile-btn" type="submit" value="View Profile" /></Link>
            </div>  
        </div>
        </section>
    )
}

CrafterCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  majorCraft: PropTypes.string.isRequired,
  bio: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  twittwer: PropTypes.string,
  instagram: PropTypes.string,
  youtube: PropTypes.string,
  profileimage: PropTypes.string
}

export default CrafterCard;