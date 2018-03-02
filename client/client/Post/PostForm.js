import React from 'react';
import { func, object } from 'prop-types';
import CKEditor from 'react-ckeditor-component';
import { Button, Input } from 'semantic-ui-react';

/**
 * Represents a Single Form.
 * Gets the data from the form to the App State
 * @func
 * @return Form
 */

const PostForm = (props) => {
  return (
    <div className="form-container" id="form-container">
      <h4>New Post</h4>
      <div className="form-basic">
        <div className="form-item">
          <label htmlFor="newPostTitle">
            <Input className="input--space" type="text" name="newPostTitle" onChange={props.handleInputChange} id="newPostTitle" required="true" placeholder="Title" />
          </label>
        </div>

        <CKEditor
          content={props.item.newPostContent}
          events={{ change: props.handleInputCKEditorChange }}
        />

        <div className="btn-submit">
          <Button basic color="red" size="tiny" type="submit" onClick={props.handleSubmit}>Create post</Button>
        </div>
      </div>
    </div>
  );
};

/** Props Validations */
PostForm.propTypes = {
  item: object,
  handleSubmit: func,
  handleInputChange: func,
  handleInputCKEditorChange: func,
};

PostForm.defaultProps = {
  item: {},
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleInputCKEditorChange: () => {},
};

/** Export module */
export default PostForm;
