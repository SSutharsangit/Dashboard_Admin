import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await axios.post('http://localhost:5000/admin/login', formdata);
      if (response.data.admin) {
        localStorage.setItem('userData', JSON.stringify(response.data.admin))
        navigate('/');
      }
    } catch (error) {
      seterror(error.response.data.error || 'An error occurred'); // Use the specific error message
      console.log(error.response.data.error || 'An error occurred');
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1 fs-2" style={{marginLeft:"20px"}}>Recyclo Admin</span>
</nav>
<form onSubmit={handlelogin} className='container' style={{ maxWidth: '400px' }}>
      <p className='text-center fw-semibold fs-3'> Sign In</p>

      <div className='mb-3'>
        <label htmlFor='Email1' className='form-label'>
          Email
        </label>
        <input
          type='text'
          className='form-control'
          id='email'
          aria-describedby='emailHelp'
          value={formdata.email}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }}>{error === 'User not found' ? 'User not found' : ''}</p>
      </div>
      <div className='mb-3'>
        <label htmlFor='Password1' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          value={formdata.password}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }}>{error === 'Incorrect password' ? 'Incorrect password' : ''}</p>
      </div>
      <div className='row my-6'>
        <button type='submit' className='btn btn-primary my-2' disabled={loading}>
          {loading ? 'Signing In...' : 'SIGN IN'}
        </button>
      </div>
    </form>
    </div>
   
  );
}

export default Login;
