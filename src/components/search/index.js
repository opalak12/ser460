import React, { useState} from 'react';
import './styles.css';


function Search(){
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [cuisine, setCuisine] = useState('');
    // const [meals, setMeals] = useState([]);

    const handleSearch = async () => {
        let mealsByDay = [];

        if (dayOfWeek && dayOfWeek !== "Weekly") {
            const response = await fetch(`http://localhost:8080/daily-plans/cuisine/${cuisine}`);
            if (response.ok) {
                const dailyPlans = await response.json();
                // mealsByDay = dailyPlans.filter(plan => plan.dayOfWeek === dayOfWeek);
                console.log("HERE");
                console.log(dailyPlans)

            }

        } else if (dayOfWeek === "Weekly") {
            const response = await fetch(`http://localhost:8080/weekly-plans/cuisine/${cuisine}`);
            if (response.ok) {
                mealsByDay = await response.json();
                console.log("HERE 2");
                console.log(mealsByDay)
            }
        }
    }

    return (
        <div className="main-container">
            <div className="input-group">
                <label>Day Of Week:</label>
                <select id="dayOfWeek" value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
                    {/* <option value="" disabled selected>Day of The Week</option> */}
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Weekly">Weekly</option>
                </select>
          </div>

          <div className="input-group">
            <label>Cuisine Type:</label>
            <select id="cuisineType" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                {/* <option value="" disabled selected>Select Cuisine Type</option> */}
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Latin">Latin</option>
                <option value="Asian">Asian</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="French">French</option>
                <option value="Japanaese">Japanaese</option>
                <option value="Mediterranean">Mediterranean</option> 
                <option value="Thai">Thai</option>
                <option value="American">American</option>
                <option value="Greek">Greek</option>
            </select>
          </div>

          <button classname='search-button' type='submit' onClick={handleSearch}>Search</button>
        </div>
    )

}

export default Search;