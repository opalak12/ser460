import React, { useState } from 'react';
import axios from 'axios';

function NotificationsPage() {
  const [username, setUsername] = useState('');
  const [notifications, setNotifications] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFetchNotifications = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8080/notifications/daily/${username}`)
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  };

  return (
    <div className="notifications-page">
      <h1>Notifications Page</h1>
      <form onSubmit={handleFetchNotifications}>
        <label>
          Enter Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="submit">Fetch Notifications</button>
      </form>
      <div className="notifications-list">
        <h2>Notifications:</h2>
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>
              <p>Subscription Type: {notification.subscription.subscriptionType}</p>
              <p>Cuisine: {notification.subscription.cuisine.name}</p>
              <p>Plan:</p>
              <ul>
                <li>Breakfast: {notification.plan.breakfast.name}</li>
                <li>Lunch: {notification.plan.lunch.name}</li>
                <li>Dinner: {notification.plan.dinner.name}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsPage;
