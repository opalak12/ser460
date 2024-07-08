import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NotificationsPage() {
  const [username, setUsername] = useState('');
  const [dailyNotifications, setDailyNotifications] = useState([]);
  const [weeklyNotifications, setWeeklyNotifications] = useState([]);
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFetchDailyNotifications = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8080/notifications/daily/${username}`)
      .then(response => {
        setDailyNotifications(response.data);
        setWeeklyNotifications([]); // Clear weekly notifications on daily fetch
        setError(null);
      })
      .catch(error => {
        setError(`Error fetching daily notifications: ${error.message}`);
      });
  };

  const handleFetchWeeklyNotifications = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8080/notifications/weekly/${username}`)
      .then(response => {
        setWeeklyNotifications(response.data);
        setDailyNotifications([]); // Clear daily notifications on weekly fetch
        setError(null);
      })
      .catch(error => {
        setError(`Error fetching weekly notifications: ${error.message}`);
      });
  };

  return (
    <div className="notifications-page">
      <h1>Notifications Page</h1>
      <form>
        <label>
          Enter Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button onClick={handleFetchDailyNotifications}>Fetch Daily Notifications</button>
        <button onClick={handleFetchWeeklyNotifications}>Fetch Weekly Notifications</button>
        <Link to="/">
        <button>Back to Landing Page</button>
      </Link>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="notifications-list">
        {dailyNotifications.length > 0 && (
          <div>
            <h2>Daily Notifications:</h2>
            <ul>
              {dailyNotifications.map(notification => (
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
        )}
        {weeklyNotifications.length > 0 && (
          <div>
            <h2>Weekly Notifications:</h2>
            <ul>
              {weeklyNotifications.map(notification => (
                <li key={notification.id}>
                  <p>Subscription Type: {notification.subscription.subscriptionType}</p>
                  <p>Cuisine: {notification.subscription.cuisine.name}</p>
                  <p>Weekly Plan:</p>
                  <ul>
                    <li>Monday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.mondayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.mondayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.mondayPlan.dinner.name}</li>
                    </ul>
                    <li>Tuesday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.tuesdayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.tuesdayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.tuesdayPlan.dinner.name}</li>
                    </ul>
                    <li>Wednesday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.wednesdayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.wednesdayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.wednesdayPlan.dinner.name}</li>
                    </ul>
                    <li>Thursday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.thursdayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.thursdayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.thursdayPlan.dinner.name}</li>
                    </ul>
                    <li>Friday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.fridayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.fridayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.fridayPlan.dinner.name}</li>
                    </ul>
                    <li>Saturday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.saturdayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.saturdayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.saturdayPlan.dinner.name}</li>
                    </ul>
                    <li>Sunday Plan:</li>
                    <ul>
                      <li>Breakfast: {notification.weeklyPlan.sundayPlan.breakfast.name}</li>
                      <li>Lunch: {notification.weeklyPlan.sundayPlan.lunch.name}</li>
                      <li>Dinner: {notification.weeklyPlan.sundayPlan.dinner.name}</li>
                    </ul>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationsPage;
