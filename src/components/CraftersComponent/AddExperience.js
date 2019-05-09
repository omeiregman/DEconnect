import React, { Component } from "react";
import TextFieldGroup from './../common/TextFieldGroup';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';

import './css/regcrafter.css';

class AddExperience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        }

        this.addExperienceClick = this.addExperienceClick.bind(this);
    }

    addExperienceClick = (e) => {
        e.preventDefault();
    } 


    render() {
        return (
            <section className="experience-section">
            <p>Add Experience Here</p>
            <div>
            <h4 className="mb-2">Experience Credentials</h4>
            <button className="btn btn-light" onClick={this.addExperienceClick}>
          <i className="fab fa-black-tie text-info mr-1"></i>
          Add New Experience</button>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-3">
                <div className="experience-pane">
                <h4>Creative Manager</h4>
                <h5>Yummy Yunchies</h5>
                <date><span>29-10-2017</span> - <span>present</span></date>
                <h6>Lagos, Nigeria</h6>
                <i class="far fa-trash-alt"></i><i class="far fa-edit"></i>
            </div>
            </div>
            <div className="col-sm-3">
                <div className="experience-pane">
                <h4>Service Launcher</h4>
                <h5>Terahub</h5>
                <date><span>12-08-2015</span> - <span>15-09-2017</span></date>
                <h6>Abuja, Nigeria</h6>
                <i class="far fa-trash-alt"></i><i class="far fa-edit"></i>
            </div>
            </div>
            <div className="col-sm-3">
                <div className="experience-pane">
                <h4>Design Intern</h4>
                <h5>Kolich Dez</h5>
                <date><span>29-10-2014</span> - <span>05-07-2015</span></date>
                <h6>Lagos, Nigeria</h6>
                <i className="far fa-trash-alt"></i><i class="far fa-edit"></i>
            </div>
            </div>
          </div>
          </div>
            </section>
        );
    }
}

export default AddExperience;