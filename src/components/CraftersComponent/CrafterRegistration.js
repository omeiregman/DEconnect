import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { createCrafter } from '../../actions/crafterActions';


import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import CrafterHeader from './CrafterHeader';
import OtherCraftItems from './OtherCraftItems';
import { SelectOptions } from './CrafterSelectOptions';


import './css/regcrafter.css';

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


  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const otherCraft = [];
    this.state.otherCraftsSelect.map((craft) => {
      return otherCraft.push(craft.text);
    });
    console.log(otherCraft);
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
  }

  componentWillMount() {
    if(this.props.crafter.crafter > 0) {
      this.props.history.push('/crafters/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ 
        errors: nextProps.errors,
        loading: false
      });
    }
  }




  render () {
    
    const { errors } = this.state;

    const options = SelectOptions;

    return (
      <section className="">
      <CrafterHeader/>
       <div className="container">
          <div className="registration-pane">
            <div className="col-sm-12">
              <div className="right-pane">
                <h3>Register as a Crafter</h3>
                <p>or go back to <Link to='/craftersandcrafts'>crafters page</Link></p>
                <br></br>
                <h4>Create your Crafters profile</h4>
                

                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>username(handle)</p>
                      <TextFieldGroup
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="A unique handle for your crafters profile, handle must be between 6 to 12 characters,
                      handle can contain alphabets and numbers. (This CAN'T be changed later)"/>
                    </div>
                    <div className="col-sm-6">
                      <p>location</p>
                      <TextFieldGroup
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}/>
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
                      <p> </p>
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
                    <div className="col">
                      <p>other crafts you practice</p>
                      <OtherCraftItems entries={this.state.otherCraftsSelect} delete={this.deleteOtherCraftItem} />
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
                  <small>Fill Social handles in this format (www.twitter.com/yourhandle)</small>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <p>instagram</p>
                      <InputGroup
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                        />
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
                <br></br>
                <br></br>
                <div>
                  <BarLoader
                    color={'#FBB062'}
                    loading={this.state.loading}
                    width={225}
                  />
                </div>
                <input type="submit" value="Register"/>
                </form>
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
  crafter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  errors: state.errors
});

export default connect (mapStateToProps, { createCrafter })(withRouter(CrafterRegistration));
