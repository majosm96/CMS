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

const SinglePageFormEdit = (props) => {
  if (props.item.isEditing) {
    console.log(props);
    return (
      <div className="form-container section-wrap" id="form-container">
        <h3 style={{ textAlign: 'center' }}>Edit Page</h3>
        <div className="form-basic">
          <div className="form-item">
            <label htmlFor="newPageName">Page name
              <Input className="input--space" type="text" value={props.item.newPageName} name="newPageName" onChange={props.handleInputChange} id="newPageName" required="true" placeholder="Title" />
            </label>
          </div>

          <div className="form-item">
            <label htmlFor="newPageUrl">Url
              <Input className="input--space" type="text" value={props.item.newPageUrl} name="newPageUrl" onChange={props.handleInputChange} id="newPageUrl" required="true" placeholder="URL" />
            </label>
          </div>

          <CKEditor
            content={props.item.newPageContent}
            events={{ change: props.handleInputCKEditorChange }}
          />

          <div className="btn-submit">
            <Button basic color="red" size="tiny" type="submit" onClick={props.onSave}>Save page</Button>
          </div>
        </div>
      </div>
    );
  }
};

/** Props Validations */
SinglePageFormEdit.propTypes = {
  item: object,
  onSave: func,
  handleInputChange: func,
  handleInputCKEditorChange: func,
};

SinglePageFormEdit.defaultProps = {
  item: {},
  onSave: () => {},
  handleInputChange: () => {},
  handleInputCKEditorChange: () => {},
};

/** Export module */
export default SinglePageFormEdit;
