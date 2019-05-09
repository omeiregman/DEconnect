import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { getCrafterFromHandle } from './../../actions/crafterActions';
import { PulseLoader } from 'react-spinners';

import CrafterHeader from './CrafterHeader';
import './css/crafterProfile.css';
import profileImage from './img/profileimage.png';
import imgGalleryOne from './img/gallery-one.jpg';
import imgGalleryTwo from './img/gallery-two.jpg';
import imgGalleryThree from './img/gallery-three.jpg';
import imgGalleryFour from './img/gallery-four.jpeg';

class CraftersProfileLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crafterDatail:{}
        }
    }

    componentDidMount() {

        const crafterUrl = this.props.match.params.handle;
        if (this.props.match.params.handle) {
            this.props.getCrafterFromHandle(crafterUrl);
        }
        this.setState({
            crafterDetail: this.props.singleCrafter
        });
    }


    render() {
        const { loading, singleCrafter } = this.props;
    console.log(this.props);

        return(
            <section className="crafter-profile-page">
                <CrafterHeader />
                {loading && 
                <div className="loader">
                  <span>
                    <PulseLoader
                    color={'#EA5800'}
                    loading={loading}
                    />
                  </span>
                  <p>Loading Crafters</p>
              </div>}

              
                {(!loading) &&
                    <section className="">
                        <section className="container">
                            <div>
                                <p>Back</p>
                            </div>
                        <section className="col-md-8">
                            <section>
                                <div className="row crafter-basic-info">
                                    <div className="col-sm-4">
                                        <img className="profile-image" src={profileImage} alt="profile" />
                                    </div>
                                    <div className="profile-info col-sm-8">
                                         <h2>{"S"}</h2>
                                         {/* {console.log(singleCrafter.user.name)} */}
                                        <small>{singleCrafter.status}</small>
                                        <p className="location"><i className="fas fa-map-marker-alt"></i><span>{singleCrafter.location}</span></p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                            <p><i className="fas fa-desktop"></i><span></span></p>
                                            <p><i className="fab fa-twitter"></i><span>{"crafter.social.twitter"}</span></p>
                                            <p><i className="fab fa-instagram"></i><span>instagram</span></p>
                                            </div>
                                            <div className="col-sm-6">
                                            <p><i className="fab fa-facebook"></i><span>facebook</span></p>
                                            <p><i className="fab fa-youtube"></i><span>youtube</span></p>
                                            </div>
                                        </div>     
                                    </div>
                                    <p>{singleCrafter.bio}</p>
                                </div>
                            </section>
                            <section className="row crafter-activity-info">
                                <div>
                                    <h3>Activities | Projects </h3>
                                    <br></br>
                                    <p>UNICEF Crafts tour for home based crafters - Singles </p>
                                    <p>Makes a lot of paper designs from scrap and boxes them into wonderful products that make for a daily doing.</p>
                                    <p>2018, SEET awards winner for best paper mache, female category</p>
                                </div>
                            </section>
                            <section className="row crafter-gallery">
                                <div>
                                    <h3>Gallery</h3>
                                    <br></br>
                                    <div className="gallery-box">
                                    <div className="row">
                                        <span className="col-sm-3"><img src={imgGalleryOne}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryTwo}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryThree}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryFour}/></span>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </section>


                        <div className="col-md-4">

                        </div>

                    </section>
            </section>}
            </section>
        );
    }
}


CraftersProfileLink.propTypes = {
  getCrafterFromHandle: PropTypes.func.isRequired,
  singleCrafter: PropTypes.object, 
  }

const mapStateToProps = (state) => ({
    singleCrafter: state.crafter.singleCrafter
  });


export default connect (mapStateToProps, { getCrafterFromHandle })(CraftersProfileLink);