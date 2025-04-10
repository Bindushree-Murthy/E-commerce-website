import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Dateofbirth: '',
    Password: '',
    Confirmpassword: '',
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.Confirmpassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/Registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const result = await response.json();
      alert(result.message); 
      navigate('/login'); 
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user: ' + error.message); 
    }
  };

  function loginn(){
    navigate('/Login');
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="body">
        <input
          type="text"
          name="Name"
          placeholder="Enter your name"
          value={formData.Name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="Email"
          placeholder="Enter your email"
          value={formData.Email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="Dateofbirth"
          value={formData.Dateofbirth}
          onChange={handleChange}
        />
        <input
          type="password"
          name="Password"
          placeholder="Enter your password"
          value={formData.Password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="Confirmpassword" 
          placeholder="Confirm your password"
          value={formData.Confirmpassword}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <h2 id='blackk'>already registered Login</h2>
        <button onClick={loginn}>Login</button>
      </form>
    </div>
  );
};

export default Register;
