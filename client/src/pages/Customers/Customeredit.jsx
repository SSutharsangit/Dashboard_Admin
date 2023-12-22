import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

const Customeredit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/user/${id}`, formData)
      .then(() => {
        console.log('Edit successful');
        navigate('/customers');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((response) => {
        console.log('User data:', response.data);
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        alert('Error fetching user data. See console for details.');
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container border border-primary mt-4 px-5" style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
          <div className="top-form row d-flex align-items-center">
            <div className="title h1 mt-4 text-primary col-10">Edit User</div>
            <div className="button col-2 mt-4">
              <Link to="/users">
                <button type="button" className="btn btn-primary">
                  Go to Users
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt-4" noValidate onSubmit={handleEdit}>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom02" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom03" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                id="validationCustom03"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom04" className="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
                id="validationCustom04"
                required
              />
            </div>
            <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
              <button className="btn btn-primary text-center" type="submit">
                Edit User
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Customeredit;