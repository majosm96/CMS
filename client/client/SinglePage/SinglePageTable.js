import React from 'react';
import { array, func } from 'prop-types';
import { Table } from 'semantic-ui-react';

import SinglePageRow from './SinglePageRow';


const SinglePageTable = (props) => {
  console.log(props.pages)
  return (
    <Table className="ui celled padded table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Url</th>
          <th>View Page</th>
        </tr>
      </thead>
      <tbody>
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

export default SinglePageTable;
