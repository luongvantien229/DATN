import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Your_Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/auth/your_profile');
        setUser(response.data);
      } catch (err) {
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post('/auth/logout');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return user ? (
    <div className="profile">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Your_Profile;
