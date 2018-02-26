import React from 'react';
import { array, func } from 'prop-types';
import { Table } from 'semantic-ui-react';

import SinglePageRow from './SinglePageRow';

/**
 * Represents a Single Table with all the data from API
 * @func
 * @param {object} - With a property array all the data of the pages
 * @return Table with data
 */

const SinglePageTable = (props) => {
  console.log(props.pages);
  return (
    <Table className="ui celled padded table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Url</th>
          <th>View Data</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/** Runs all array and makes a row by item */}
        {props.pages.map(item => (<SinglePageRow
          key={item._id}
          page={item}
          handleDelete={props.handleDelete}
          handleView={props.handleView}
          singlePageView={props.singlePageView}
        />))}
      </tbody>
    </Table>
  );
};

/** Props Validations */
SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  handleView: func,
  singlePageView: func,
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  handleView: () => {},
  singlePageView: () => {},
};

/** Module export */
export default SinglePageTable;
