import React from 'react';
import { object, func } from 'prop-types';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

/**
 * Represents a Single Table with all the data from API
 * @func
 * @param {object} - Each page element
 * @return Row
 */
const PostRow = (props) => {
  return (
    <tr className="table-row" id={props.post._id}>
      <td>{props.post.title}</td>
      <td>
        <Button inverted color="blue" size="tiny" className="btn-yellow" onClick={() => props.handleEdit(props.post)} >Edit</Button>
      </td>
      <td>
        <Button inverted color="red" size="tiny" className="btn-yellow" onClick={props.handleDelete} >Delete</Button>
      </td>
    </tr>
  );
};


/** Props Validations */
PostRow.propTypes = {
  handleDelete: func,
  handleEdit: func,
  post: object,
};

PostRow.defaultProps = {
  handleDelete: () => {},
  handleEdit: () => {},
  post: object,
};

/** Export the module */
export default PostRow;
