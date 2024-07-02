import React from 'react';
import './styles.css';

function Search(){
    return (
        <div className="main-container">
            <div className="input-group">
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

          <div className="input-group">
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

          <button classname='search-button' type='submit'>Search</button>

        </div>
    )

}

export default Search;