import React from 'react';

import Dashboard from '../Dashboard/DashboardContainer';

/**
 * Represents the Dashboard.
 * @func
 * @return Dashboard with Links
 */

const DashboardHomeContainer = () => (
  <div className="l-group">
    <Dashboard />
    <div className="section-wrap l-group home-container">
      <div>
        <h3>Welcome to the newest CMS</h3>
        <p>You can create pages with text and images, manage them with edit and delete methods</p>
      </div>
    </div>
  </div>
);

/* Module Export */
export default DashboardHomeContainer;
