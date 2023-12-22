import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {  useDispatch } from 'react-redux'
import { setAdminCount} from '../../redux/Slice/Admin';

function Setting() {
  const dispatch = useDispatch()
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [adminFormData, setAdminFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); 

  const handleAdminChange = (e) => {
    setAdminFormData({
      ...adminFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const updatedAdminFormData = {
      ...adminFormData,
      role: 'admin',
    };
    axios.post('http://localhost:5000/admin/signup', updatedAdminFormData)
      .then(() => {
        console.log('Admin user created successfully');
        navigate('/setting');
      })
      .catch((error) => {
        console.error('Error creating admin user:', error);
        setError('Error creating admin user. Please try again.'); 
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/admin')
      .then((response) => {
        dispatch(setAdminCount(response.data.length))
        console.log(response.data);
        setAdmins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError('Error fetching admin users. Please try again.'); 
      });
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container mt-4" style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
          <h2>Dashboard Settings</h2>
          <div className="row mt-4">
            <div className="col-md-6 mt-4">
              <div className="card " style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
                <div className="card-header">Admin User Settings</div>
                <div className="card-body">
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <form onSubmit={handleAdminSubmit}>
                    <div className="mb-3">
                      <label htmlFor="adminUsername" className="form-label">Admin Username:</label>
                      <input
                        type="text"
                        name="username"
                        value={adminFormData.username}
                        onChange={handleAdminChange}
                        className="form-control"
                        id="adminUsername"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="adminEmail" className="form-label">Admin Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={adminFormData.email}
                        onChange={handleAdminChange}
                        className="form-control"
                        id="adminEmail"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="adminPassword" className="form-label">Admin Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={adminFormData.password}
                        onChange={handleAdminChange}
                        className="form-control"
                        id="adminPassword"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success">Create Admin User</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
                <div className="card-header">General Settings</div>
                <div className="card-body">
                  <div className="content container mt-20">
                    <div className="table-responsive">
                      <table className="table table-hover text-center">
                        <thead>
                          <tr>
                            <th scope="col">AdminName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Operations</th>
                          </tr>
                        </thead>
                        <tbody>
                          {admins.map((admin, index) => (
                            <tr key={admin._id}>
                              <td>{admin.username}</td>
                              <td>{admin.email}</td>
                              <td>
                                <Link to={`/admin/${admin._id}`}>
                                  <button type="button" className="btn btn-outline-danger mx-1"><DeleteOutlineOutlinedIcon /></button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Setting;
