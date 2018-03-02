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

const LogInForm = props => (
  <div className="form-container" id="form-container">
    <div className="form-basic">
      <div className="">
        <label htmlFor="UserName">
          <Input className="input--space" type="text" name="UserName" onChange={props.handleInputChange} id="UserName" required="true" placeholder="User name" />
        </label>
      </div>
      <div className="">
        <label htmlFor="UserPassword">
          <Input className="input--space" type="password" name="UserPassword" onChange={props.handleInputChange} id="UserPassword" required="true" placeholder="Password" />
        </label>
      </div>

      <div className="form-item">
        <Link to="/Auth"><button className="btn btn-principal btn-setup" onClick={props.handleSubmit}>Log in</button></Link>
      </div>
    </div>
  </div>
);

/** Props Validations */
LogInForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
};

LogInForm.defaultProps = {
  handleSubmit: () => {},
  handleInputChange: () => {},
};

/** Export module */
export default LogInForm;
