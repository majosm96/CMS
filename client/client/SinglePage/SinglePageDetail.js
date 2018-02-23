import React from 'react';
import { object } from 'prop-types';

const SinglePageDetail = (props) => {
  return (
    <div>
      <h3>{props.page.name} Page Detail</h3>
      <strong>URL: {props.page.url} </strong>
      <p>{props.page.text}</p>
    </div>
  );
};

SinglePageDetail.propTypes = {
  page: object,
};

SinglePageDetail.defaultProps = {
  page: object,
};

export default SinglePageDetail;
