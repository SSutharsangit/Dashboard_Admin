import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

const Customercreate = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('http://localhost:5000/user/signup', formData)
      .then(() => {
        console.log('User created successfully');
        setLoading(false);
        navigate('/customers');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container border border-primary mt-4 px-5">
          <div className="top-form row d-flex align-items-center">
            <div className="title h1 mt-4 text-primary col-10">Create New User</div>
            <div className="button col-2 mt-4">
              <Link to="/customers">
                <button type="button" className="btn btn-primary">
                  Go Homepage
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt-4" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
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
                onChange={handleChange}
                className="form-control"
                id="validationCustom04"
                required
              />
            </div>
            <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
              <button className="btn btn-primary text-center" type="submit">
                Create New User
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Customercreate;
