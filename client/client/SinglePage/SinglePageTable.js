import React from 'react';
import { array, func } from 'prop-types';
import { Table } from 'semantic-ui-react';

import SinglePageTemplate from './SinglePageTemplate';


const SinglePageTable = (props) => {
  return (
    <Table className="ui celled padded table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {props.pages.map(item => (<SinglePageTemplate
          key={item.id}
          page={item}
          handleDelete={props.handleDelete}
          singlePageView={props.singlePageView}
        />))}
      </tbody>
    </Table>
  );
};

SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  singlePageView: func,
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  singlePageView: () => {},
};

export default SinglePageTable;
