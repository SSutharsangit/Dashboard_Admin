import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const UserDelete = () => {
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
        alert(error);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/customers");
      })
      .catch((error) => {
        alert(error);
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
              <h5 className="card-title">Are you sure you want to delete this user?</h5>
              <p className="card-text">Username: {user.username}</p>
              <Link to="/users">
                <button className="btn btn-danger" style={{ marginRight: '30px' }} onClick={handleDelete}>
                  Yes, delete
                </button>
              </Link>
              <Link to="/customers">
                <button className="btn btn-success">No</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDelete;
