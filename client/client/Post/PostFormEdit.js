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

const PostFormEdit = (props) => {
  if (props.item.isEditing) {
    console.log(props);
    return (
      <div className="form-container section-wrap" id="form-container">
        <h3 style={{ textAlign: 'center' }}>Edit Post</h3>
        <div className="form-basic">
          <div className="form-item">
            <label htmlFor="newPostTitle">Post Title
              <Input className="input--space" type="text" value={props.item.newPostTitle} name="newPostTitle" onChange={props.handleInputChange} id="newPostTitle" required="true" placeholder="Title" />
            </label>
          </div>
          <CKEditor
            content={props.item.newPostContent}
            events={{ change: props.handleInputCKEditorChange }}
          />

          <div className="btn-submit">
            <Button basic color="red" size="tiny" type="submit" onClick={props.onSave}>Save post</Button>
          </div>
        </div>
      </div>
    );
  }
};

/** Props Validations */
PostFormEdit.propTypes = {
  item: object,
  onSave: func,
  handleInputChange: func,
  handleInputCKEditorChange: func,
};

PostFormEdit.defaultProps = {
  item: {},
  onSave: () => {},
  handleInputChange: () => {},
  handleInputCKEditorChange: () => {},
};

/** Export module */
export default PostFormEdit;
