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
      <h3>Welcome to the coolest but useless CMS</h3>
    </div>
  </div>
);

/* Module Export */
export default DashboardHomeContainer;