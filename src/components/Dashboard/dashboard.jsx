import React from 'react';
import './Dashboard.css'; // Mund të shtoni CSS për dashboardin tuaj

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>

      <div className="overview">
        <h2>Overview</h2>
        <div className="overview-card">
          <h3>Total Users</h3>
          <p>500</p>
        </div>
        <div className="overview-card">
          <h3>Active Sessions</h3>
          <p>150</p>
        </div>
      </div>

      <div className="statistics">
        <h2>Statistics</h2>
        <div className="stats-card">
          <h3>Monthly Revenue</h3>
          <p>$5,000</p>
        </div>
        <div className="stats-card">
          <h3>New Sign-ups</h3>
          <p>20</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>User JohnDoe signed in.</li>
          <li>User JaneDoe signed up.</li>
          <li>New payment of $100 received.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
