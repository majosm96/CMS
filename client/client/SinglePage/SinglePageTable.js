import React from 'react';
import { array, func } from 'prop-types';

import SinglePageTemplate from './SinglePageTemplate';


const SinglePageTable = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>Name</td>
          <td>Url</td>
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
    </table>
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
