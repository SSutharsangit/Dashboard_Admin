import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const AdminDelete = () => {
  const [adminUser, setAdminUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const { id } = useParams();

 

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/admin/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/setting');
      })
      .catch((error) => {
        console.error('Error deleting admin user:', error);
        setError('Error deleting admin user. Please try again.'); 
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="card text-center mb-3" style={{ width: '30rem', backgroundColor: 'whitesmoke', color: '#2962ff' }}>
            <div className="card-body">
              {error && <p style={{ color: 'red' }}>{error}</p>} 
              <h5 className="card-title">Are you sure you want to delete admin user {adminUser.username}?</h5>
              <button className="btn btn-danger" onClick={handleDelete}>
                Yes, Delete
              </button>
              <Link to="/setting">
                <button className="btn btn-secondary">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDelete;
