import React from 'react';
import { func } from 'prop-types';

import { Button, Input } from 'semantic-ui-react';

const SetUpForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <div className="form-item">
        <label htmlFor="newUserName">
          <Input type="text" name="newUserName" onChange={props.handleInputChange} id="newUserName" required="true" placeholder="User name" />
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newUserPassword">
          <Input type="text" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Password" />
        </label>

      </div>
      <div className="form-item">
        <label htmlFor="newDataBase">
          <Input type="text" name="newDataBase" onChange={props.handleInputChange} id="newDataBase" required="true" placeholder="Data Base" />
        </label>
      </div>

      <div className="form-item">
        <Button type="submit" className="btn-primary blue btn-empty" onClick={props.handleSubmit}>Go</Button>
      </div>
    </div>
  </div>
);

SetUpForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

SetUpForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default SetUpForm;
