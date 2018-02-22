import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DashboardContainer = () => (
  <div>
    <div className="clearfix">
      <section className="section-wrap">
        <div className="" style={{ textAlign: 'center', padding: '3rem' }}>
          <h2>WELCOME</h2>
          <p>The coolest and unusable CMS :)</p>
        </div>
        <div className="dashboard-sidebar">
          <Link to="/SinglePage"><Button>Add new page</Button></Link>
        </div>
      </section>
    </div>
  </div>
);


export default DashboardContainer;
