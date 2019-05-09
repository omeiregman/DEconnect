import React from 'react';
import { Link } from 'react-router-dom';

 const CraftersDashboardActions = () => {
     return (
        <div className="btn-group mb-4" role="group">
        <Link to="/crafters/edit" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
        <Link to="/" className="btn btn-light">
          <i className="fab fa-black-tie text-info mr-1"></i>
          Add Experience</Link>
        <Link to="/" className="btn btn-light">
          <i className="fas fa-graduation-cap text-info mr-1"></i>
          Add a Course</Link>
      </div>

     )
 }

 export default CraftersDashboardActions;