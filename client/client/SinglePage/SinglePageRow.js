import React from 'react';
import { Link } from 'react-router-dom';
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
        <Button inverted color="blue" size="mini" className="btn-yellow" onClick={() => props.handleEdit(props.page)} >Edit</Button>
      </td>
      <td>
        <Button inverted color="red" size="mini" className="btn-yellow" onClick={props.handleDelete} >Delete</Button>
      </td>
      <td>
        <Link to={`/Site/${props.page.url}`}><Button inverted color="yellow" size="mini" className="btn-yellow">View</Button></Link>
      </td>
    </tr>
  );
};


/** Props Validations */
SinglePageRow.propTypes = {
  singlePageView: func,
  handleDelete: func,
  handleView: func,
  handleEdit: func,
  page: object,
};

SinglePageRow.defaultProps = {
  singlePageView: () => {},
  handleDelete: () => {},
  handleView: () => {},
  handleEdit: () => {},
  page: object,
};

/** Export the module */
export default SinglePageRow;
