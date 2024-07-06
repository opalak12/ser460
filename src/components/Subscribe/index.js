import React, { useState, useEffect } from 'react';
import './styles.css';

function Subscribe() {
    const [name, setUsername] = useState('');
    const [cuisine, setCuisineType] = useState('');
    const [subscriptionType, setSubscriptionType] = useState('');
    const [cuisines, setCuisines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCuisines();
    }, []);

    const fetchCuisines = () => {
        fetch('http://localhost:8080/cuisines')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cuisines');
                }
                return response.json();
            })
            .then(data => {
                setCuisines(data);
            })
            .catch(error => {
                setError(error.message);
            });
    };
    // const handleSubscribe = () => {
    //     fetch(`http://localhost:8080/subscribe/${name}/${cuisine}/${subscriptionType}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to subscribe');
    //         }
    //     })
    //     .catch(error => {
    //         setError(error.message);
    //     });
    // };
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div className="parent-container">
            <div className="publish-container">
                <div className="form-section">
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cuisine Type Of Interest:</label>
                        <select
                            id="cuisineType"
                            value={cuisine}
                            onChange={(e) => setCuisineType(e.target.value)}
                        >
                            <option value="" disabled>Select Cuisine Type</option>
                            {cuisines.map(cuisine => (
                                <option key={cuisine.id} value={cuisine.name}>{cuisine.name}</option>
                            ))}
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Type Of Subscription:</label>
                        <select id="frequency" value={subscriptionType} onChange={(e) => setSubscriptionType(e.target.value)}>
                        <option value="" disabled>Type Of Subscription</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>

                    <button className="subscribe-button" >
                        Subscribe
                    </button>
                    <button className="subscribe-button" >
                        Unsubscribe
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Subscribe;
