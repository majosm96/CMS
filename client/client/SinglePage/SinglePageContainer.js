import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, object } from 'prop-types';

import Dashboard from '../Dashboard/DashboardContainer';
import SinglePageForm from './SinglePageForm';
import SinglePageDetail from './SinglePageDetail';
import SinglePageTable from './SinglePageTable';

import { getPage, addPage, deletePage, updatePage } from './Actions';

/**
 * Represents a SinglePage.
 * Creates pages, edit, update, delete
 * @class
 * @return Singlepage
 */

class SinglePageContainer extends Component {
  /** Constructor manage state of the app */
  constructor(props) {
    super(props);
    this.state = {
      newPageName: '',
      newPageUrl: '',
      newPageText: '',
      view: false,
    };

    /** Call of methods  */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.singlePageView = this.singlePageView.bind(this);
  }
  /** Load data  */
  componentDidMount() {
    this.props.loadData();
  }

  /** Looks for input changes in order to set the state  */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /** Handle data and sets to state in order to send data to server  */
  handleSubmit() {
    const page = {};
    page.name = this.state.newPageName;
    page.url = this.state.newPageUrl;
    page.text = this.state.newPageText;

    this.props.addPage(page);

    this.setState({
      newPageName: '',
      newPageUrl: '',
      newPageText: '',
      view: false,
    });
  }

  /** Get the _id so that send to server */
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePage(e.target.parentNode.parentNode.getAttribute('id'));
    console.log(e.target.parentNode.parentNode.getAttribute('id'))
  }

  /** Change view property in state in order to show Page Detail */
  handleView() {
    this.state.view = true;
    console.log(this.state.view);
  }

  singlePageView() {
    console.log('testing');
  }

  render() {
    /* Reference of the state in order to manage condition render */
    const view = this.state.view;

    return (
      <div className="container-fluid">
        <Dashboard />
        <div className="section-wrap section">
          <SinglePageForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
          <div>
            {view ? (
              <SinglePageDetail />
            ) : (
              <span />
            )}
          </div>
          <SinglePageTable
            pages={this.props.pages}
            handleDelete={this.handleDelete}
            handleView={this.handleView}
            showFormEdit={this.showFormEdit}
            singlePageView={this.singlePageView}
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
 * @returns {object} - object of the App state.
 */

function mapStateToProps(state) {
  return {
    loading: state.loading,
    view: state.view,
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
    addPage: page => dispatch(addPage(page)),
    loadData: () => {
      dispatch(getPage());
    },
    deletePage: _id => dispatch(deletePage(_id)),
    updatePage: page => dispatch(updatePage(page)),
  };
}

/** Props Validations */
SinglePageContainer.propTypes = {
  pages: array,
  loadData: func,
  addPage: func,
  deletePage: func,
  updatePage: func,
};

SinglePageContainer.defaultProps = {
  pages: [],
  loadData: () => {},
  addPage: () => {},
  deletePage: () => {},
  updatePage: () => {},
};


/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
