import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import Dashboard from '../Dashboard/DashboardContainer';
import PostForm from './PostForm';
import PostFormEdit from './PostFormEdit';
import PostTable from './PostTable';

import { getPosts, addPost, deletePost, updatePost } from './Actions';

/**
 * Represents a Post.
 * Creates posts, edit, update, delete
 * @class
 * @return Post
 */

class PostContainer extends Component {
  /** Constructor manage state of the app */
  constructor(props) {
    super(props);
    this.state = {
      newPostTitle: '',
      newPostContent: '',
      _id: '',
      isEditing: false,
    };

    /** Call of methods  */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    /** Handles */
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCKEditorChange = this.handleInputCKEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    const newContentCKeditor = evt.editor.getData();
    console.log(newContentCKeditor);
    this.setState({
      newPostContent: newContentCKeditor,
    });
  }

  /** Handle data and sets to state in order to send data to server  */
  handleSubmit() {
    const post = {};
    post.title = this.state.newPostTitle;
    post.content = this.state.newPostContent;

    console.log('post', post);
    this.props.addPost(post);

    this.setState({
      newPostTitle: '',
      newPostContent: '',
      isEditing: false,
    });
  }

  /** Get the _id so that send to server */
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(e.target.parentNode.parentNode.getAttribute('id'));
    console.log(e.target.parentNode.parentNode.getAttribute('id'));
  }

  /** Change State of isEditing */
  toggleEdit(post) {
    console.log(post);
    this.setState({
      newPostTitle: post.title,
      newPostContent: post.content,
      _id: post._id,
      isEditing: !this.state.isEditing,
    });
  }

  /** Hadle Edit */
  onSave(event) {
    console.log('event', event);
    const field = event.target.name;
    const post = {};

    post.title = this.state.newPostTitle;
    post.content = this.state.newPostContent;
    post._id = this.state._id;

    post[field] = event.target.value;

    console.log('post', post);
    this.props.updatePost(post);

    return this.setState({
      newPostTitle: '',
      newPostContent: '',
      _id: '',
      isEditing: false,
    });
  }

  render() {
    /* Reference of the state in order to manage condition render */
    if (this.state.isEditing) {
      return (
        <div>
          <PostFormEdit
            item={this.state}
            onSave={this.onSave}
            handleInputChange={this.handleInputChange}
            handleInputCKEditorChange={this.handleInputCKEditorChange}
          />
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <Dashboard />
        <div className="section-wrap section">
          <h2 style={{ textAlign: 'center' }}>Posts</h2>
          <PostForm
            item={this.state}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            handleInputCKEditorChange={this.handleInputCKEditorChange}
          />
          <PostTable
            posts={this.props.posts}
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
    posts: state.Post.posts,
  };
}


/**
 * Maps Dispath functions to the Model.
 * @func
 * @returns {object} - Object with all of actions methods to dispatch to the App.
 */

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(addPost(post)),
    loadData: () => {
      dispatch(getPosts());
    },
    deletePost: _id => dispatch(deletePost(_id)),
    updatePost: post => dispatch(updatePost(post)),
  };
}

/** Props Validations */
PostContainer.propTypes = {
  posts: array,
  loadData: func,
  addPost: func,
  deletePost: func,
  updatePost: func,
};

/** Props Validations */
PostContainer.defaultProps = {
  posts: [],
  loadData: () => {},
  addPost: () => {},
  deletePost: () => {},
  updatePost: () => {},
};


/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
