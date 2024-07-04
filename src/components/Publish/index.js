import React, { useState } from 'react';
import './styles.css';

function Publish() {
  const [cuisineType, setCuisineType] = useState('');
  const [mealName, setMealName] = useState('');
  const [timeOfMeal, setTimeOfMeal] = useState('');
  const [timeToMake, setTimeToMake] = useState('');

  const handlePublish = async () => {
    const url = 'http://localhost:8080/dietitian/create/meal';

    const cuisineId = getCuisineId(cuisineType);

    const requestBody = {
      name: mealName,
      cuisine: {
        cuisineId,
        cuisineName: cuisineType
      },
      timeToMake: parseInt(timeToMake, 10),
      type: timeOfMeal
    };

    console.log("In publish", requestBody);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const getCuisineId = (cuisineName) => {
    const cuisines = {
      'Mexican': 1,
      'Italian': 2,
      'Chinese': 3,
      'Indian': 4,
      'French': 5,
      'Japanese': 6,
      'Mediterranean': 7,
      'Thai': 8,
      'American': 9,
      'Greek': 10,
      'Asian': 11,
      'Latin': 12
    };
    return cuisines[cuisineName];
  };

  return (
    <div className="parent-container">
      <div className="publish-container">
        <div className="form-section">

          <div className="form-group">
            <label>Meal Name:</label>
            <input
              type="text"
              placeholder="Meal Name"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Cuisine Type:</label>
            <select
              id="cuisineType"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
            >
              <option value="" disabled>Select Cuisine Type</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Latin">Latin</option>
              <option value="Asian">Asian</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="French">French</option>
              <option value="Japanese">Japanese</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Thai">Thai</option>
              <option value="American">American</option>
              <option value="Greek">Greek</option>
            </select>
          </div>

          <div className="form-group">
            <label>Cooking Time:</label>
            <input
              type="text"
              placeholder="Cooking Time in min"
              value={timeToMake}
              onChange={(e) => setTimeToMake(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Time Of Meal:</label>
            <select
              id="timeOfMeal"
              value={timeOfMeal}
              onChange={(e) => setTimeOfMeal(e.target.value)}
            >
              <option value="" disabled>Time Of Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          <button className="publish-button" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
