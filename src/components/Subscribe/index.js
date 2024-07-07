import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

function Subscribe() {
  const [username, setUsername] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubscribe = async () => {
    const subscription = {
      username,
      cuisineType,
      frequency
    };

    try {
      await axios.post('http://localhost:8080/subscribe', subscription);
      alert('Subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Subscription failed.');
    }
  };

  return (
    <div className="parent-container">
      <div className="publish-container">
        <div className="form-section">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Cuisine Type Of Interest:</label>
            <select
              id="cuisineType"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
            >
              <option value="" disabled>Select Cuisine Type</option>
              <option value="Italian">Italian</option>
              <option value="African">African</option>
              <option value="Mexican">Mexican</option>
              <option value="Latin">Latin</option>
              <option value="Asian">Asian</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type Of Subscription:</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="" disabled>Type of Subscription</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
          <button className="publish-button" onClick={handleSubscribe}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
