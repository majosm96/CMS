import React from 'react';
import { object, func } from 'prop-types';

const SinglePageTemplate = (props) => {
  return (
    <tr onClick={props.singlePageView()} className="table-row" id={props.page.id}>
      <td>{props.page.name}</td>
      <td>{props.page.url}</td>
      <td>{props.page.text}</td>
    </tr>
  );
};

SinglePageTemplate.propTypes = {
  singlePageView: func,
  page: object,
};

SinglePageTemplate.defaultProps = {
  singlePageView: () => {},
  page: object,
};

export default SinglePageTemplate;
