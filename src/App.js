import './App.css';
import Navbar from './components/Navbar';
import PublishMeals from './components/Publish';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/publish" element={<PublishMeals />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  </Router>
  );
}

export default App;
