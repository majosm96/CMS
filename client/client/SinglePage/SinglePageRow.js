import React from 'react';
import { object, func } from 'prop-types';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

const SinglePageRow = (props) => {
  return (
    <tr className="table-row" id={props.page.id}>
      <td>{props.page.name}</td>
      <td>{props.page.url}</td>
      <td>
        <Button color="teal" size="tiny" onClick={props.handleView}>View</Button>
      </td>
    </tr>
  );
};

SinglePageRow.propTypes = {
  singlePageView: func,
  handleView: func,
  page: object,
};

SinglePageRow.defaultProps = {
  singlePageView: () => {},
  handleView: () => {},
  page: object,
};

export default SinglePageRow;
