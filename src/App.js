import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PublishMeals from './components/Publish';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/publish" element={<PublishMeals />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  </Router>
  );
}

export default App;
