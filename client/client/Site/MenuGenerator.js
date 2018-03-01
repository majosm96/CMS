import React from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';

/**
 * Represents a Page Generator with all the data from API
 * @func
 * @param {object} - With a property array all the data of the pages
 * @return New page template
 */

const MenuGenerator = (props) => {
  return (
    <nav className="main-nav">
      {props.pages.map(page => (
        <Link to={`/Site/${page.url}`} className="nav-item">{page.name}</Link>
      ))}
    </nav>
  );
};

/** Props Validations */
MenuGenerator.propTypes = {
  pages: array,
};


MenuGenerator.defaultProps = {
  pages: [],
};

/** Module export */
export default MenuGenerator;
