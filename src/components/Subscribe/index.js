import React from 'react';
import './styles.css';


function Subscribe(){
    return(
        <div className="parent-container">
            <div className="publish-container">
                <div className="form-section">

                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label>Cuisine Type Of Interest:</label>
                        <select id="cuisineType">
                            <option value="" disabled selected>Select Cuisine Type</option>
                            <option value="Italian">Italian</option>
                            <option value="African">Indian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Latin">Latin</option>
                            <option value="Asian">Asian</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Type Of Subscription:</label>
                        <select id="frequency">
                            <option value="" disabled selected>Type of Subscription</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>

                <button className="publish-button">Publish</button>
                </div>
            </div>
         </div>
    );
}

export default Subscribe;