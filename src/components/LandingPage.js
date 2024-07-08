import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Meal Planning App</h1>
      <div className="plan-options">
        <Link to="/daily-plan">
          <button>Daily Plan Publishing</button>
        </Link>
        <Link to="/weekly-plan">
          <button>Weekly Plan Publishing</button>
        </Link>
        <Link to="/notifications">
          <button>Notifications</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
