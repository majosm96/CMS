import React from 'react';
import { object } from 'prop-types';

const SinglePageTemplate = (props) => {
  return (
    <tr className="table-row" id={props.page.id}>
      <td>{props.page.name}</td>
      <td>{props.page.url}</td>
      <td>{props.page.text}</td>
    </tr>
  );
};

SinglePageTemplate.propTypes = {
  page: object,
};

SinglePageTemplate.defaultProps = {
  page: object,
};

export default SinglePageTemplate;
