import React from 'react';
import './styles.css';


function Login() {
  return (
    <div className='main-login'>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Login;
