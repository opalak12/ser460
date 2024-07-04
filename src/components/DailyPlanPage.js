import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

const cuisines = [
  "Mexican", "Italian", "Chinese", "Indian", "French", "Japanese", 
  "Mediterranean", "Thai", "American", "Greek", "Asian", "Latin"
];

function DailyPlanPage() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: null,
    lunch: null,
    dinner: null
  });

  useEffect(() => {
    // Fetch meals based on selectedCuisine
    if (selectedCuisine) {
      axios.get(`http://localhost:8080/meal/cuisines/${selectedCuisine}`)
        .then(response => {
          setMeals(response.data);
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    }
  }, [selectedCuisine]);

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const handleMealSelect = (meal, type) => {
    setSelectedMeals(prevState => ({
      ...prevState,
      [type]: meal
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // POST selectedMeals to http://localhost:8080/daily-plans
    axios.post('http://localhost:8080/daily-plans', selectedMeals)
      .then(response => {
        console.log('Daily plan submitted successfully:', response.data);
        // Optionally show a success message or redirect to another page
      })
      .catch(error => {
        console.error('Error submitting daily plan:', error);
        // Handle error, show error message to the user
      });
  };

  return (
    <div className="daily-plan-page">
      <h1>Select Meals for Daily Plan</h1>

      {/* Back button to LandingPage */}
      <Link to="/">
        <button>Back to Landing Page</button>
      </Link>

      <div className="cuisine-selection">
        <h2>Select Cuisine:</h2>
        <ul>
          {cuisines.map(cuisine => (
            <li key={cuisine}>
              <button onClick={() => handleCuisineSelect(cuisine)}>{cuisine}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="meal-selection">
        <h2>Selected Cuisine: {selectedCuisine}</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Select Meals:</legend>
            <div>
              <h3>Breakfast:</h3>
              <ul>
                {meals.filter(meal => meal.type === 'Breakfast').map(meal => (
                  <li key={meal.id}>
                    <label>
                      <input type="radio" name="breakfast" value={meal.id} onChange={() => handleMealSelect(meal, 'breakfast')} />
                      {meal.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Lunch:</h3>
              <ul>
                {meals.filter(meal => meal.type === 'Lunch').map(meal => (
                  <li key={meal.id}>
                    <label>
                      <input type="radio" name="lunch" value={meal.id} onChange={() => handleMealSelect(meal, 'lunch')} />
                      {meal.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Dinner:</h3>
              <ul>
                {meals.filter(meal => meal.type === 'Dinner').map(meal => (
                  <li key={meal.id}>
                    <label>
                      <input type="radio" name="dinner" value={meal.id} onChange={() => handleMealSelect(meal, 'dinner')} />
                      {meal.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
          <button type="submit">Submit Daily Plan</button>
        </form>
      </div>

      
    </div>
  );
}

export default DailyPlanPage;
