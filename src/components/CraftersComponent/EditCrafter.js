import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { createCrafter, getCurrentCrafter } from '../../actions/crafterActions';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import AddExperience from './AddExperience';
import { SelectOptions } from './CrafterSelectOptions';

import './css/regcrafter.css';
import isEmpty from './../../validation/is-empty';
import CrafterHeader from './CrafterHeader';
import OtherCraftItems from './OtherCraftItems';


class CrafterRegistration extends Component {
  constructor(props){
    super(props);


    this.state = {
      loading: false,
      status: '',
      handle: '',
      company: '',
      website: '',
      location: '',
      otherCraftsSelect: [],
      bio: '',
      youtube: '',
      twitter: '',
      instagram: '',
      facebook: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteOtherCraftItem = this.deleteOtherCraftItem.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const otherCraft = [];
    this.state.otherCraftsSelect.map((craft) => {
      return otherCraft.push(craft.text);
    });

    let crafterData = {
     handle: this.state.handle,
     company: this.state.company,
     website: this.state.website,
     location: this.state.location,
     status: this.state.status,
     crafts: otherCraft.join(","),
     bio: this.state.bio,
     youtube: this.state.youtube,
     twitter: this.state.twitter,
     instagram: this.state.instagram,
     facebook: this.state.facebook
    }
    
    this.props.createCrafter(crafterData, this.props.history);
    console.log(crafterData);
  }

  componentDidMount() {
      this.props.getCurrentCrafter();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ 
        errors: nextProps.errors,
        loading: false
      });
    }

    if(nextProps.crafter.crafter) {
        const crafter = nextProps.crafter.crafter;

        //Convert skills array back to string 
   
        //If crafter field doesnt exist, make empty string
        crafter.company = !isEmpty(crafter.company) ? crafter.company : '';
        crafter.location = !isEmpty(crafter.location) ? crafter.location: '';
        crafter.website = !isEmpty(crafter.website) ? crafter.website : '';
        crafter.bio = !isEmpty(crafter.bio) ? crafter.bio : '';
        crafter.status = !isEmpty(crafter.status) ? crafter.status : '';

        crafter.social = !isEmpty(crafter.social) ? crafter.social : {};
        crafter.youtube = !isEmpty(crafter.social.youtube) ? crafter.social.youtube : '';
        crafter.facebook = !isEmpty(crafter.social.facebook) ? crafter.social.facebook : '';
        crafter.twitter = !isEmpty(crafter.social.twitter) ? crafter.social.twitter : '';
        crafter.instagram = !isEmpty(crafter.social.instagram) ? crafter.social.instagram : '';

        crafter.crafts = !isEmpty(crafter.crafts) ? crafter.crafts : '';

        
        if (crafter.crafts !== '') {
          const list = crafter.crafts;
          let mapCrafts = mapCrafts = list.map((item, i) => {
            return {
              text: item,
              key: i
            }
          });
          this.setState({
            otherCraftsSelect: mapCrafts
          });
        }

        
        //set compontent field, state
        this.setState({
            handle: crafter.handle,
            company: crafter.company,
            website: crafter.website,
            location: crafter.location,
            status: crafter.status,
            bio: crafter.bio,
            youtube: crafter.youtube,
            twitter: crafter.twitter,
            instagram: crafter.instagram,
            facebook: crafter.facebook
        })
    }
  }

  onOtherCraftChange = (e) => {
    const newCraft = {
      text: e.target.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        otherCraftsSelect: prevState.otherCraftsSelect.concat(newCraft)
      };
    });
  }

  deleteOtherCraftItem(key) {
    const filteredItems = this.state.otherCraftsSelect.filter( (item) => {
      return (item.key !== key);
    });

    this.setState({
      otherCraftsSelect: filteredItems
    });
  }




  render () {
    const { errors } = this.state;
    const options = SelectOptions;

    const entries = this.state.otherCraftsSelect;

    return (
      <section className="">
      <CrafterHeader/>
       <div className="row">
          <div className="registration-pane">
            <div className="col-sm-12">
              <div className="right-pane">
                <h3>Edit Profile</h3>
                <p>or go back to <Link to='/crafters/dashboard'>Dashboard</Link></p>
                <br></br>

                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="col-sm-4">
                      <p>profile photo</p>
                    </div>
                    <div className="col-sm-4">
                      <p>username(handle)</p>
                      <TextFieldGroup
                      disabled={true}
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="This CAN'T be changed"/>
                    </div>
                    <div className="col-sm-4">
                      <p>location</p>
                      <TextFieldGroup
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}/>
                    </div>
                    <div className="col-sm-4">
                      <p>profile photo</p>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>company</p>
                      <TextFieldGroup
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                      error={errors.company}/>
                    </div>

                    <div className="col-sm-6">
                      <p>website</p>
                      <TextFieldGroup
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      error={errors.website}/>
                    </div>
                  </div>

                  <hr></hr>
                  <p>crafts</p>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>major craft</p>
                      <p>{this.state.majorCraft}</p>
                      <SelectListGroup
                      name="status"
                      id="exampleFormControlSelect1"
                      placeholder="Major Craft"
                      value={this.state.status}
                      onChange={this.onChange}
                      options={options}
                      error={errors.status}
                      />
                    </div>
                    <div className="col-sm-6">
                      <p>other crafts you practice</p>
                      <OtherCraftItems entries={entries} delete={this.deleteOtherCraftItem} />
                      <SelectListGroup
                      name="otherCraftSelect"
                      id="exampleFormControlSelect1"
                      value={this.state.otherCraftsSelect}
                      onChange={this.onOtherCraftChange}
                      options={options}
                      error={errors.crafts}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <p>bio</p>
                  <TextAreaFieldGroup
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="A short bio of yourself, should not be more than 200 characters"
                    />
                  
                  <hr></hr>

                  {/*Social Media accounts*/}
                  <p>Social Media handles</p>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>instagram</p>
                      <InputGroup
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}/>
                    </div>

                    <div className="col-sm-6">
                      <p>twitter</p>
                      <InputGroup
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}/>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>facebook</p>
                      <InputGroup
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}/>
                    </div>

                    <div className="col-sm-6">
                      <p>youtube</p>
                      <InputGroup
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}/>
                    </div>
                  </div>

                  <hr></hr>
                  {/* Experience */}
            

                <br></br>
                <div>
                  <BarLoader
                    color={'#FBB062'}
                    loading={this.state.loading}
                    width={225}
                  />
                </div>
                <input type="submit" value="Update"/>
                </form>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

CrafterRegistration.propTypes = {
  createCrafter: PropTypes.func.isRequired,
  getCurrentCrafter: PropTypes.func.isRequired,
  crafter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  errors: state.errors
});

export default connect (mapStateToProps, { createCrafter, getCurrentCrafter })(withRouter(CrafterRegistration));
