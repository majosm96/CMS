import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, object } from 'prop-types';

import SinglePageForm from './SinglePageForm';
import SinglePageDetail from './SinglePageDetail';
import SinglePageTable from './SinglePageTable';

import { getPage, addPage, deletePage, updatePage } from './Actions';

class SinglePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPageName: '',
      newPageUrl: '',
      newPageText: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.singlePageView = this.singlePageView.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

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
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePage(e.target.parentNode.parentNode.getAttribute('id'));
  }

  handleView(page) {
    this.props.updatePage(page);
  }

  singlePageView(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode.getAttribute('id'));
  }

  render() {
    return (
      <div className="">
        <div className="main--open section-wrap">
          <div className="section-wrap">
            <SinglePageForm
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
            />
            {/* <SinglePageDetail /> */}
            <SinglePageTable
              pages={this.props.pages}
              handleDelete={this.handleDelete}
              handleView={this.handleView}
              showFormEdit={this.showFormEdit}
              singlePageView={this.singlePageView}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    view: state.view,
    pages: state.SinglePage.pages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPage: page => dispatch(addPage(page)),
    loadData: () => {
      dispatch(getPage());
    },
    deletePage: id => dispatch(deletePage(id)),
    updatePage: page => dispatch(updatePage(page)),
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
