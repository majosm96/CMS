import React from 'react';
import { object, func } from 'prop-types';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

/**
 * Represents a Single Table with all the data from API
 * @func
 * @param {object} - Each page element
 * @return Row
 */
const SinglePageRow = (props) => {
  return (
    <tr className="table-row" id={props.page._id}>
      <td>{props.page.name}</td>
      <td>{props.page.url}</td>
      <td>
        <Button color="teal" size="tiny" onClick={e => props.handleView()}>View</Button>
      </td>
      <td>
        <Button color="teal" size="tiny" >Edit</Button>
      </td>
      <td>
        <Button color="teal" size="tiny" onClick={props.handleDelete} >Delete</Button>
      </td>
    </tr>
  );
};


/** Props Validations */
SinglePageRow.propTypes = {
  singlePageView: func,
  handleDelete: func,
  handleView: func,
  page: object,
};

SinglePageRow.defaultProps = {
  singlePageView: () => {},
  handleDelete: () => {},
  handleView: () => {},
  page: object,
};

/** Export the module */
export default SinglePageRow;
