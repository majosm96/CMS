import React from 'react';
import { array, func } from 'prop-types';
import { Table } from 'semantic-ui-react';

import SinglePageTemplate from './SinglePageTemplate';


const SinglePageTable = (props) => {
  return (
    <Table class="ui celled padded table">
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
          showFormEdit={props.showFormEdit}
        />))}
      </tbody>
    </Table>
  );
};

SinglePageTable.propTypes = {
  pages: array,
  handleDelete: func,
  showFormEdit: func,
};

SinglePageTable.defaultProps = {
  pages: [],
  handleDelete: () => {},
  showFormEdit: () => {},
};

export default SinglePageTable;
