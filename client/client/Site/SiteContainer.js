import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import Dashboard from '../Dashboard/DashboardContainer';
import MenuGenerator from './MenuGenerator';


import { getPages } from './Actions';
import PageGenerator from './PageGenerator';

/**
 * Represents a SinglePage.
 * Creates pages, edit, update, delete
 * @class
 * @return Singlepage
 */

class SiteContainer extends Component {
  /** Constructor manage state of the app */
  constructor(props) {
    super(props);
    /** Call of methods  */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  /** Load data  */
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="section-wrap section">
          <div className="dashboard-wrap__link">
            <Link className="dashboard__a--return" to="/Dashboard">Go to Dashboard</Link>
          </div>
          <PageGenerator
            pages={this.props.pages}
          />
        </div>
      </div>
    );
  }
}

/**
 * Maps props of the Model.
 * @func
 * @param {state} state - State of Single Page Container.
 * @returns {object} - object of the Pages state.
 */

function mapStateToProps(state) {
  return {
    pages: state.SinglePage.pages,
  };
}


/**
 * Maps Dispath functions to the Model.
 * @func
 * @returns {object} - Object with all of actions methods to dispatch to the App.
 */

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getPages());
    },
  };
}

/** Props Validations */
SiteContainer.propTypes = {
  pages: array,
  loadData: func,
};

/** Props Validations */
SiteContainer.defaultProps = {
  pages: [],
  loadData: () => {},
};


/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);

