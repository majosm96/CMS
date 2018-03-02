import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, object } from 'prop-types';

import Dashboard from '../Dashboard/DashboardContainer';
import SinglePageForm from './SinglePageForm';
import SinglePageFormEdit from './SinglePageFormEdit';
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
      newPageContent: '',
      _id: '',
      isEditing: false,
      view: false,
    };

    /** Call of methods  */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    /** Handles */
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCKEditorChange = this.handleInputCKEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    /** Toggle Edit */
    this.toggleEdit = this.toggleEdit.bind(this);
    /** Save date */
    this.onSave = this.onSave.bind(this);
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

  /** Handle Input change for CKEditor */
  handleInputCKEditorChange(evt) {
    console.log('onChange fired with event info: ', evt);
    const newContent = evt.editor.getData();
    console.log(newContent);
    this.setState({
      newPageContent: newContent,
    });
  }

  /** Handle data and sets to state in order to send data to server  */
  handleSubmit() {
    const page = {};
    page.name = this.state.newPageName;
    page.url = this.state.newPageUrl;
    page.content = this.state.newPageContent;

    this.props.addPage(page);

    this.setState({
      newPageName: '',
      newPageUrl: '',
      newPageContent: '',
      isEditing: false,
      view: false,
    });
  }

  /** Get the _id so that send to server */
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePage(e.target.parentNode.parentNode.getAttribute('id'));
    console.log(e.target.parentNode.parentNode.getAttribute('id'));
  }

  /** Change view property in state in order to show Page Detail */
  handleView() {
    this.state.view = true;
    console.log(this.state.view);
  }

  /** Change State of isEditing */
  toggleEdit(page) {
    console.log(page);
    this.setState({
      newPageName: page.name,
      newPageUrl: page.url,
      newPageContent: page.content,
      _id: page._id,
      isEditing: !this.state.isEditing,
    });
  }

  /** Hadle Edit */
  onSave(event) {
    console.log('event', event);
    const field = event.target.name;
    const page = {};

    page.name = this.state.newPageName;
    page.url = this.state.newPageUrl;
    page.content = this.state.newPageContent;
    page._id = this.state._id;

    page[field] = event.target.value;

    console.log('page', page);
    this.props.updatePage(page);

    return this.setState({
      newPageName: '',
      newPageUrl: '',
      newPageContent: '',
      _id: '',
      isEditing: false,
    });
  }

  render() {
    /* Reference of the state in order to manage condition render */
    if (this.state.isEditing) {
      return (
        <div>
          <SinglePageFormEdit
            item={this.state}
            onSave={this.onSave}
            handleInputChange={this.handleInputChange}
            handleInputCKEditorChange={this.handleInputCKEditorChange}
          />
        </div>
      );
    }
    return (
      <div className="l-group">
        <Dashboard />
        <div className="section-wrap clearfix section l-group ">
          <h3>Pages</h3>
          <SinglePageForm
            item={this.state}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            handleInputCKEditorChange={this.handleInputCKEditorChange}
          />
          <SinglePageTable
            pages={this.props.pages}
            handleEdit={this.toggleEdit}
            handleDelete={this.handleDelete}
            handleView={this.handleView}
            showFormEdit={this.showFormEdit}
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

/** Props Validations */
SinglePageContainer.defaultProps = {
  pages: [],
  loadData: () => {},
  addPage: () => {},
  deletePage: () => {},
  updatePage: () => {},
};


/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
