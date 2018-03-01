import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


/**
 * Represents the Dashboard.
 * @func
 * @return Dashboard with Links
 */

const DashboardContainer = () => (
  <div className="dashboard l-group ">
    <div className="clearfix">
      <section className="section-wrap">
        <h2 className="sidebar__title sidebar__title--logo sidebar__title--logo-dash">CMS</h2>
        <nav className="dashboard__nav">
          <Link to="/Site" className="dashboard__a dashborad__icon--preview">Preview</Link>
          <Link to="/SinglePage" className="dashboard__a dashborad__icon--newpage">Pages</Link>
          {/* <Link to="/SinglePage" className="dashboard__a dashborad__icon--media">New Media</Link> */}
        </nav>
      </section>
    </div>
  </div>
);

/* Module Export */
export default DashboardContainer;
