import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { array } from 'prop-types';

import PageTemplate from './PageTemplate';
import MenuGenerator from './MenuGenerator';

/**
 * Represents a Page Generator with all the data from API
 * @func
 * @param {object} - With a property array all the data of the pages
 * @return New page template
 */

const PageGenerator = (props) => {
  return (
    <div>
      <MenuGenerator
        pages={props.pages}
      />
      <Switch>
        {props.pages.map(page => (
          <Route
            exact
            path={`/Site/${page.url}`}
            key={page._id}
            render={
              () => { return (<PageTemplate key={page._id} page={page} />); }
            }
          />))}
      </Switch>
    </div>
  );
};

/** Props Validations */
PageGenerator.propTypes = {
  pages: array,
};


PageGenerator.defaultProps = {
  pages: [],
};

/** Module export */
export default PageGenerator;
