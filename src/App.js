import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DailyPlanPage from './components/DailyPlanPage';
// import WeeklyPlanPage from './WeeklyPlanPage';
import LandingPage from './components/LandingPage';
import WeeklyPlanPage from './components/WeeklyPlanPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/daily-plan" element={<DailyPlanPage />} />
      <Route path="/weekly-plan" element={<WeeklyPlanPage />} />
    </Routes>
  </Router>
  );
}

export default App;
