import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


/**
 * Represents the Dashboard.
 * @func
 * @return Dashboard with Links
 */

const DashboardContainer = () => (
  <div className="dashboard">
    <div className="clearfix">
      <section className="section-wrap">
        <nav className="dashboard__nav">
          <Link to="/SinglePage" className="dashboard__a dashborad__icon--newpage">New Page</Link>
          <Link to="/SinglePage" className="dashboard__a dashborad__icon--media">New Media</Link>
          <Link to="/SinglePage" className="dashboard__a dashborad__icon--post">New Post</Link>
        </nav>
      </section>
    </div>
  </div>
);

/* Module Export */
export default DashboardContainer;
