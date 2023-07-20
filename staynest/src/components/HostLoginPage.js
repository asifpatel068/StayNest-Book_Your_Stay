import React, { useState } from 'react';
import HostForm from './HostForm';

const HostLoginPage = ({ onLogin, onSignup }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({});

  const handleLoginSignupToggle = () => {
    setIsLoginForm((prev) => !prev);
    setFormData({}); // Clear form data when toggling between login and signup
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      onLogin(formData);
    } else {
      onSignup(formData);
    }
  };

  return (
    <div>
      <h1>{isLoginForm ? 'Host Login' : 'Host Signup'}</h1>
      <form onSubmit={handleSubmit}>
     
        {isLoginForm && ( // Only show password field for login
          <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email || ''} onChange={handleChange} required />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {isLoginForm ? ( // Show login button
          <div>
            <button type="submit">Login</button>
          </div>
        ) : ( // Show signup button and link to switch to login
          <HostForm/>
        )}
      </form>
      <p>
        {isLoginForm ? 'Don\'t have an account?' : 'Already have an account?'}
        <button onClick={handleLoginSignupToggle}>
          {isLoginForm ? 'Signup' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default HostLoginPage;
