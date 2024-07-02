import React from 'react';
import './styles.css';

function Publish() {
  return (
    <div className="parent-container">
      <div className="publish-container">
        <div className="form-section">

          <div className="form-group">
            <label>Username:</label>
            <input type="text" placeholder="Username" />
          </div>

          <div className="form-group">
            <label>Cuisine Type:</label>
            <select id="cuisineType">
                <option value="" disabled selected>Select Cuisine Type</option>
                <option value="Italian">Italian</option>
                <option value="African">Indian</option>
                <option value="Mexican">Mexican</option>
                <option value="Latin">Latin</option>
                <option value="Asian">Asian</option>
            </select>
          </div>

          <div className="form-group">
            <label>Meal Name:</label>
            <input type="text" placeholder="Meal Name" />
          </div>

          <div className="form-group">
            <label>Time Of Meal:</label>
            <select id="timeOfMeal">
                <option value="" disabled selected>Time Of Meal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
            </select>
          </div>

          <div className="form-group">
            <label>Day Of Week:</label>
            <select id="dayOfWeek">
                <option value="" disabled selected>Day of The Week</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Yuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Weekly">Weekly</option>
            </select>
          </div>

          <button className="publish-button">Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
