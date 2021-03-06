import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Represents a Welcome Container.
 * @class
 * @return Container with animation and Link to Set Up
 */

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.animation = this.animation.bind(this);
  }

  /** Animatied Lego */
  animation() {
    const animData = {
      wrapper: document.querySelector('#animationWindow'),
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json',
    };
    const anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(2);
  }

  render() {
    this.animation();
    return (
      <div className="container-fluid">
        <div className="row welcome-container">
          <div className="col-sm-12 col-md-6 section-wrap welcome-wrap">
            <h1 className="welcome-wrap__heading">Welcome</h1>
            <p className="welcome-p">Welcome to CMS. Before getting started. You will need to give the following items before proceeding.</p>
            <ul className="welcome-wrap__list">
              <li>1. User name</li>
              <li>2. User password</li>
              <li>3. Database name</li>
            </ul>
            <Link to="/SetUp" className="btn btn-principal btn-hidden">Let's go</Link>
          </div>
          <div className="col-sm-12 col-md-6 section-wrap wrap--hidden" onClick={this.animation.bind(this)} >
            <div id="animationWindow" />
            <p>You can build your own website, just like legos :)</p>
            <Link to="/SetUp" className="btn btn-principal">Let's go</Link>
          </div>
        </div>
      </div>
    );
  }
}
/** Export Module */
export default WelcomeContainer;
