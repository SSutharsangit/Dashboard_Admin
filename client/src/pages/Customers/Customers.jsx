import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Sidebar from '../../components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useDispatch } from 'react-redux'
import { setCustomerCount} from '../../redux/Slice/Customer';
import axios from 'axios';
import Loading from '../Loading';


function Customers() {
  const dispatch = useDispatch();
  const [customers,setcustomers]=useState([]);
  const [loading,setloading] =useState(false);
  useEffect(()=>{
    setloading(true);
    axios
    .get("http://localhost:5000/user")
    .then((response)=>{
      dispatch(setCustomerCount(response.data.length))
      console.log(response.data);
      setcustomers(response.data);
      setloading(false);
    })
    .catch((error)=>{
      console.log(error);
      setloading(false);
    })
  },[])


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div className="div" style={{ flex: 1, overflow: 'auto', border: '2px solid white' }}>
        <div className="navbarcontainer">
          <div className='container-f navbar ' style={{backgroundColor:"#096B88"}}>
            <div className="navbar-brand px-5 h6 text-white col-4">Customerslist</div>
            <Link to="/customer/create">
              <button type="button" className="btn btn-outline-light col-8">ADD NEW CUSTOMER</button>
            </Link>
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="content container mt-20">
            <div className="table-responsive">
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Location</th>
                    <th scope="col">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={customer._id}>
                      <td>{customer.username}</td>
                      <td>{customer.email}</td>
                      <td>{customer.location}</td>
                      <td>
                        <Link to={`/customer/details/${customer._id}`}>
                          <button type="button" className="btn btn-outline-info mx-1"><InfoOutlinedIcon /></button>
                        </Link>
                        <Link to={`/customer/edit/${customer._id}`}>
                          <button type="button" className="btn btn-outline-warning mx-1"><EditOutlinedIcon /></button>
                        </Link>
                        <Link to={`/customer/delete/${customer._id}`}>
                          <button type="button" className="btn btn-outline-danger mx-1"><DeleteOutlineOutlinedIcon /></button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
