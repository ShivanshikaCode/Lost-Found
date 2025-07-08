import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with a real password check in future
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/found');
    } else {
      alert('Wrong password!');
    }
  };

  return (
    <div className="report-form">
      <h2>🔐 Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
