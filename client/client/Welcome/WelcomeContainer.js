import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

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
    anim.setSpeed(2.4);
  }

  render() {
    this.animation();
    return (
      <div className="container-fluid">
        <div className="row welcome-container">
          <div className="col-sm-12 col-md-6 section-wrap welcome-wrap">
            <h1>Welcome</h1>
            <p className="welcome-p">Some are just easier to install, use and extend, thanks to some thoughtful planning by the lead developers</p>
            <Link to="/SetUp"><Button className="btn-principal" inverted>Start</Button></Link>
          </div>
          <div className="col-sm-12 col-md-6 section-wrap">
            <Button onClick={this.animation}>Animi</Button>
            <div id="animationWindow" />
            <p>You can build your own web site, just like legos :)</p>
          </div>
        </div>
      </div>
    );
  }
}

/** Export Module */
export default WelcomeContainer;
