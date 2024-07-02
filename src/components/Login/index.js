import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Both username and password are required');
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/search');
  }

  return (
    <div className='main-login'>

      <div>
        <label>Username</label>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>

      {error && <p className='error'>{error}</p>}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
