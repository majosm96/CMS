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

const SinglePageForm = (props) => {
  return (
    <div className="form-container" id="form-container">
      <h4>New Page</h4>
      <div className="form-basic">
        <div className="form-item">
          <label htmlFor="newPageName">
            <Input className="input--space" type="text" name="newPageName" onChange={props.handleInputChange} id="newPageName" required="true" placeholder="Title" />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="newPageUrl">
            <Input className="input--space" type="text" name="newPageUrl" onChange={props.handleInputChange} id="newPageUrl" required="true" placeholder="URL" />
          </label>
        </div>

        <CKEditor
          content={props.item.newPageContent}
          events={{ change: props.handleInputCKEditorChange }}
        />

        <div className="btn-submit">
          <button className="btn btn-principal btn-submit-page" type="submit" onClick={props.handleSubmit}>Create page</button>
        </div>
      </div>
    </div>
  );
};

/** Props Validations */
SinglePageForm.propTypes = {
  item: object,
  handleSubmit: func,
  handleInputChange: func,
  handleInputCKEditorChange: func,
};

SinglePageForm.defaultProps = {
  item: {},
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleInputCKEditorChange: () => {},
};

/** Export module */
export default SinglePageForm;
