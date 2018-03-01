import React from 'react';
import { object } from 'prop-types';

const Parser = require('html-react-parser');

/**
 * Represents a Template with all the data from API
 * @func
 * @param {object} - Each page element
 * @return Template
 */
const PageTemplate = (props) => {
  const pageContent = props.page.content;
  return (
    <div id={props.page._id}>
      <h2>{props.page.name}</h2>
      <div>{Parser(`${pageContent}`)}</div>
    </div>
  );
};


/** Props Validations */
PageTemplate.propTypes = {
  page: object,
};

PageTemplate.defaultProps = {
  page: object,
};

/** Export the module */
export default PageTemplate;
