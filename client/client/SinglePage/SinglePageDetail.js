import React from 'react';
import { object } from 'prop-types';

/**
 * Represents a Single Page Detail.
 * @func
 * @param {object} - With a property page data.
 * @return A section with the info.
 */

const SinglePageDetail = (props) => {
  return (
    <div>
      <h3>{props.page.name} Page Detail</h3>
      <strong>URL: {props.page.url} </strong>
      <p>{props.page.text}</p>
    </div>
  );
};

/** Props validation */
SinglePageDetail.propTypes = {
  page: object,
};

SinglePageDetail.defaultProps = {
  page: object,
};

/** Module export */
export default SinglePageDetail;
