import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import PublishMeals from './components/Publish';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribe from './components/Subscribe';
import DailyPlanPage from './components/DailyPlanPage';
import LandingPage from './components/LandingPage';
import WeeklyPlanPage from './components/WeeklyPlanPage';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/publish" element={<PublishMeals />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/daily-plan" element={<DailyPlanPage />} />
      <Route path="/weekly-plan" element={<WeeklyPlanPage />} />
    </Routes>
  </Router>
  );
}

export default App;
