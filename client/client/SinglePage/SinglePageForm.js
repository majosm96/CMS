import React from 'react';
import { func, object } from 'prop-types';
import { Form, Button, Input } from 'semantic-ui-react';

/**
 * Represents a Single Form.
 * Gets the data from the form to the App State
 * @func
 * @return Form
 */

const SinglePageForm = props => (
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

      <div className="form-item">
        <label htmlFor="newPageText">
          <Input className="input--space" type="text" name="newPageText" onChange={props.handleInputChange} id="newPageText" required="true" placeholder="Teaser Text Page" />
        </label>
      </div>

      <div className="btn-submit">
        <Button basic color="red" size="tiny" type="submit" onClick={props.handleSubmit}>Create page</Button>
      </div>
    </div>
  </div>
);

/** Props Validations */
SinglePageForm.propTypes = {
  item: object,
  handleSubmit: func,
  handleInputChange: func,
};

SinglePageForm.defaultProps = {
  item: {},
  handleSubmit: () => {},
  handleInputChange: () => {},
};

/** Export module */
export default SinglePageForm;
