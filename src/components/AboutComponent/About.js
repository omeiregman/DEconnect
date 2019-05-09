import React from 'react';
import './css/about.css';
import img_logo from './img/logo.png';
import img_abt_one from './img/about-img-1.png';
import img_abt_two from './img/about-img-2.png';
import img_abt_three from './img/about-img-3.png';
import img_mission from './img/mission.png';
import img_vision from './img/vision.png';

import azeezat from './img/azeezat.jpg';
import moyosola from './img/Moyosola.jpg';
import oluwatomi from './img/Oluwatomi.jpg';
import jomi from './img/Jomi.jpg';
import pascaline from './img/Pascaline.jpg';


const About = () => {
  return (
    <div className="">
      <div className="section-about">
        <div className="about-header">
          <h2 className="page-head-hero">About Us</h2>
        </div>

        <div className="about-section-one">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2 className="about-section-header">About The Crafters Connect</h2>
                <img src={img_logo} alt="TCC" />
              </div>
              <div className="col-md-8">
                <p>
                  <br></br>
                  <br></br>
                  The Crafters Connect is an online hub that explores the big
                  brilliant world of creativity where crafters can connect, interact,
                  network, learn, collaborate and collectively contribute to the growth
                  of individual craft brands.
                </p>
              </div>
            </div>
            <div className="row">
              <p>We are a firm formation on the background of TEAM work – Together Each Achieves More. Here;
                We create and maintain an online platform for crafters; craft-trainers/trainees, crafts employers/employees
                (contract, internship, full time), crafters and clients
                (wholesale/retail, seasonal, promotions), craft investors, crafts collaborators, and crafts connectors. </p>
            </div>
          </div>
        </div>

        <div className="about-section-two">
          <div className="row">
            <div className="col-sm-3">
              <img src={img_abt_one} alt="About Us" />
            </div>
            <div className="col-sm-3">
              <img src={img_abt_two} alt="About Us" />
            </div>
            <div className="col-sm-3">
              <img src={img_abt_three} alt="About Us" />
            </div>
            <div className="col-sm-3">
              <img src={img_abt_three} alt="About Us" />
            </div>
          </div>
        </div>

        <div className="about-section-three">
          <div className="container">
            <div className="row">
              <ul className="about-section-three-items">
                <li className="about-items">We accommodate online craft courses and webinars for empowerment opportunities.</li>
                <li className="about-items">We celebrate crafters and craft promoters to encourage creativity for economy growth.</li>
                <li className="about-items">We inspire and ensure capacity building cum empowerment programmes.</li>
                <li className="about-items">We are100% entrepreneurs – call us Craftpreneurs please!</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="about-section-four">
          <div className="container">
            <div className="row">
              <h2 className="about-section-header">The Belief</h2>
              <p>Crafting is an admirably unique expression of the human mind and Crafters are the creative doers, the bold explorers of the inherent features that are peculiar to them. Through their bold explorations, they create, recreate, preserve, build and also inspire. Therefore, there is the need to create a learning space, strengthen
                and expand the network base of crafters (experienced and inexperienced) for mentorship, partnership and patronage.
                The diverse kinds of craft are a rich alternative to make entrepreneurship drive flourish well and grow the nation’s economy in ripple effects. But since a lot of minds are still shut to this well of hidden treasures within the Crafts Industry), we see the need to explore the world of crafts through convincing minds, eyes and ears.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <img src={img_mission} alt="Mission" />
              </div>
              <div className="col-sm-10">
                <h3 className="about-section-header">Mission</h3>
                <p>Create a unique platform for crafters to network, learn, create, collaborate, inspire/make crafts, and have fun growing together.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <img src={img_vision} alt="Vision" />
              </div>
              <div className="col-sm-10">
                <h3 className="about-section-header">Vision</h3>
                <p>Be a one-stop online platform that meets provision for rich exposure, appreciation and patronage of Nigerian/African crafts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section-five">
          <div className="container">
            <div>
              <h3 className="about-section-header">Brains Behind TCC</h3>
              <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-3 col-xs-6">
                  {/* <img src={} alt=""/> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section-six">
          <div className="container">
            <div className="">
              <h3 className="about-section-header">TCC Events and Activities</h3>

              <h4>Crafts Courses/Party (A series of online and offline courses)</h4>
              <p>Crafts Party holds at the conference where freshly trained crafters (students of any/all the TCC Courses)
              are celebrated, their freshly acquired skills and first creations showcased.</p>
              <h4>TCC Conference (annual)</h4>
              <p>This was inspired by The Crafts Party, hence with shared objectives. The major difference is the expansion to accommodate more activities and involvement of more crafters and craft-lovers.
                It is a week-long gathering for lectures, discussions, exhibition, mini workshop, and networking. </p>
              <h4>TCC News</h4>
              <p>The Crafters and their Crafts (online magazine with an annual hard copy publication)</p>

              <h4>TCC Journalism </h4>

              <h4>TCC Tourism </h4>

              <h4>Crafts News</h4>

              <h4>Discovery</h4>

              <h4>Events</h4>
              <h4>The Crafters Show (Television Show – the process of production, The Reality Crafts Show)</h4>

              <p>We invite you; join us as we explore and empower minds of creativity</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>


  );
}

export default About;
