import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PublishMeals from './components/Publish';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/publish" element={<PublishMeals />} />
    </Routes>
  </Router>
  );
}

export default App;
