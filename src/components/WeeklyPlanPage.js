import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

const cuisines = [
  "Mexican", "Italian", "Chinese", "Indian", "French", "Japanese", 
  "Mediterranean", "Thai", "American", "Greek", "Asian", "Latin"
];

function WeeklyPlanPage() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [meals, setMeals] = useState([]);
  const [weeklyPlan, setWeeklyPlan] = useState([]);

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

  const handleMealSelect = (meal, day, type) => {
    const updatedWeeklyPlan = [...weeklyPlan];
    const dayIndex = updatedWeeklyPlan.findIndex(item => item.day === day);

    if (dayIndex !== -1) {
      updatedWeeklyPlan[dayIndex][type] = meal;
    } else {
      updatedWeeklyPlan.push({
        day: day,
        breakfast: null,
        lunch: null,
        dinner: null,
        [type]: meal
      });
    }

    setWeeklyPlan(updatedWeeklyPlan);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // POST weeklyPlan to http://localhost:8080/weekly-plans
    axios.post('http://localhost:8080/weekly-plans', weeklyPlan)
      .then(response => {
        console.log('Weekly plan submitted successfully:', response.data);
        // Optionally show a success message or redirect to another page
      })
      .catch(error => {
        console.error('Error submitting weekly plan:', error);
        // Handle error, show error message to the user
      });
  };

  return (
    <div className="weekly-plan-page">
      <h1>Select Meals for Weekly Plan</h1>

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

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select Meals for Each Day:</legend>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div key={day}>
              <h3>{day}:</h3>
              <div>
                <h4>Breakfast:</h4>
                <ul>
                  {meals.filter(meal => meal.type === 'Breakfast').map(meal => (
                    <li key={meal.id}>
                      <label>
                        <input type="radio" name={`${day}-breakfast`} value={meal.id} onChange={() => handleMealSelect(meal, day.toLowerCase(), 'breakfast')} />
                        {meal.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Lunch:</h4>
                <ul>
                  {meals.filter(meal => meal.type === 'Lunch').map(meal => (
                    <li key={meal.id}>
                      <label>
                        <input type="radio" name={`${day}-lunch`} value={meal.id} onChange={() => handleMealSelect(meal, day.toLowerCase(), 'lunch')} />
                        {meal.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Dinner:</h4>
                <ul>
                  {meals.filter(meal => meal.type === 'Dinner').map(meal => (
                    <li key={meal.id}>
                      <label>
                        <input type="radio" name={`${day}-dinner`} value={meal.id} onChange={() => handleMealSelect(meal, day.toLowerCase(), 'dinner')} />
                        {meal.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </fieldset>
        <button type="submit">Submit Weekly Plan</button>
      </form>

      
    </div>
  );
}

export default WeeklyPlanPage;
