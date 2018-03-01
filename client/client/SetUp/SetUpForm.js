import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';

/**
 * Represents a Single Form.
 * Gets the data from the form to the App State
 * @func
 * @return Form
 */

const SetUpForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <div className="">
        <label htmlFor="newUserName">
          <Input className="input--space setup-input" type="text" name="newUserName" onChange={props.handleInputChange} id="newUserName" required="true" placeholder="User name" />
        </label>

      </div>
      <div className="">
        <label htmlFor="newUserPassword">
          <Input className="input--space setup-input" type="password" name="newUserPassword" onChange={props.handleInputChange} id="newUserPassword" required="true" placeholder="Password" />
        </label>

      </div>
      <div className="">
        <label htmlFor="newDataBase">
          <Input className="input--space setup-input" type="text" name="newDataBase" onChange={props.handleInputChange} id="newDataBase" required="true" placeholder="Data Base" />
        </label>
      </div>

      <div className="">
        <Link to="/LogIn" className="btn btn-principal" onClick={props.handleSubmit}>Submit</Link>
      </div>
    </div>
  </div>
);

/** Props Validations */
SetUpForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

SetUpForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};

/** Export module */
export default SetUpForm;
