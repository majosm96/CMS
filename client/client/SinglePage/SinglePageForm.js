import React from 'react';
import { func, object } from 'prop-types';
import { Button, Input } from 'semantic-ui-react';

const SinglePageForm = props => (
  <div className="form-container" id="form-container">
    <h4>New Page</h4>
    <div className="form-basic">
      <div className="form-item">
        <label htmlFor="newPageName">
          <Input className="input--space" type="text" name="newPageName" onChange={props.handleInputChange} id="newPageName" required="true" placeholder="Page Name" />
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
      <div className="form-item">
        <Button type="submit" className="btn-primary blue btn-empty" onClick={props.handleSubmit}>Create New Page</Button>
      </div>
    </div>
  </div>
);


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


export default SinglePageForm;