import React, { useState, useEffect } from 'react';
import './styles.css';

function Subscribe() {
    const [cuisines, setCuisines] = useState([]);
    const [username, setUsername] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [subscriptionType, setSubscriptionType] = useState('');

    useEffect(() => {
        fetchCuisines();
    }, []);

    const fetchCuisines = async () => {
        try {
            const response = await fetch('http://localhost:8080/meal/cuisines');
            if (!response.ok) {
                throw new Error('Failed to fetch cuisines');
            }
            const data = await response.json();
            setCuisines(data);
        } catch (error) {
            console.error('Error fetching cuisines:', error);
            // Handle error if needed
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleCuisineChange = (event) => {
        setCuisineType(event.target.value);
    };

    const handleSubscriptionChange = (event) => {
        setSubscriptionType(event.target.value);
    };

    const handlePublish = async () => {
        if (!username || !cuisineType || !subscriptionType) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/subscribe/${username}/${cuisineType}/${subscriptionType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Add body if needed
            });
            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }
            // Handle success if needed
            console.log('Subscription successful');
        } catch (error) {
            console.error('Error subscribing:', error);
            // Handle error if needed
        }
    };

    return (
        <div className="parent-container">
            <div className="publish-container">
                <div className="form-section">
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    </div>

                    <div className="form-group">
                        <label>Cuisine Type Of Interest:</label>
                        <select id="cuisineType" value={cuisineType} onChange={handleCuisineChange}>
                            <option value="" disabled>Select Cuisine Type</option>
                            {cuisines.map(cuisine => (
                                <option key={cuisine} value={cuisine}>{cuisine}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Type Of Subscription:</label>
                        <select id="frequency" value={subscriptionType} onChange={handleSubscriptionChange}>
                            <option value="" disabled>Select Subscription Type</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>

                    <button className="publish-button" onClick={handlePublish}>Publish</button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
