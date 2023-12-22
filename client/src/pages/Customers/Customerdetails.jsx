import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleGoDashboard = () => {
    navigate('/customers'); // Update the route as needed
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="card text-center mb-3" style={{ width: '30rem', backgroundColor: 'whitesmoke', color: '#2962ff' }}>
            <div className="card-body">
              <h5 className="card-title">{user.username} Details...</h5>
              <p className="card-text">ID: {user._id}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Location: {user.location}</p>
              <p className="card-text">Created At: {user.createdAt}</p>
              <p className="card-text">Updated At: {user.updatedAt}</p>

              <button className="btn btn-primary" onClick={handleGoDashboard}>
                Go Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
