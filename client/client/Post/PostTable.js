import React from 'react';
import { array, func } from 'prop-types';
import { Table } from 'semantic-ui-react';

import PostRow from './PostRow';

/**
 * Represents a Single Table with all the data from API
 * @func
 * @param {object} - With a property array all the data of the pages
 * @return Table with data
 */

const PostTable = (props) => {
  return (
    <Table className="ui celled padded table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/** Runs all array and makes a row by item */}
        {props.posts.map(item => (<PostRow
          key={item._id}
          post={item}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}
          handleView={props.handleView}
        />))}
      </tbody>
    </Table>
  );
};

/** Props Validations */
PostTable.propTypes = {
  posts: array,
  handleEdit: func,
  handleDelete: func,
  handleView: func,
};

PostTable.defaultProps = {
  posts: [],
  handleEdit: () => {},
  handleDelete: () => {},
  handleView: () => {},
};

/** Module export */
export default PostTable;
