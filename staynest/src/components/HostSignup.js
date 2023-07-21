import React, { useState } from 'react';
import HostForm from './HostForm';

const HostSignup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    // e.preventDefault();
    // Call the signup API endpoint here
    fetch('http://localhost:5000/host/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the signup response
        console.log('Signup response:', data);
      })
      .catch((error) => {
        // Handle signup error
        console.error('Signup error:', error);
      });
  };

  return (
    <div>
      <h1>Host Signup</h1>
      <HostForm
        isLoginForm={false}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSignupSubmit}
      />
    </div>
  );
};

export default HostSignup;
