import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Sidebar from '../../components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Loading from '../Loading';
import {  useDispatch } from 'react-redux'
import { setOrderCount} from '../../redux/Slice/Orderslice';
function Orders() {
  const dispatch = useDispatch()
  const [orders,setorders]=useState([]);
  const [loading,setloading] =useState(false);
  useEffect(()=>{
    setloading(true);
    axios
    .get("http://localhost:5000/orders")
    .then((response)=>{
      dispatch(setOrderCount(response.data.length))
      console.log(response.data);
      setorders(response.data);
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
          <div className='container-f navbar' style={{backgroundColor:"#096B88"}}>
            <div className="navbar-brand px-5 h6 text-white col-4">Orderslist</div>
            <Link to="/order/create">
              <button type="button" className="btn btn-outline-light col-8">ADD NEW Orders</button>
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
                    <th scope="col">UserId</th>
                    <th scope="col">CustomerId</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Total</th>
                    {/* <th scope="col">DeliveryStatus</th>
                    <th scope="col">PaymentStatus</th> */}
                    <th scope="col">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{order.userId}</td>
                      <td>{order.customerId}</td>
                      <td>{order.productId}</td>
                      <td>{order.quantity}</td>
                      <td>{order.subtotal}</td>
                      <td>{order.total}</td>
                      {/* <td>{order.DeliveryStatus}</td>
                      <td>{order.PaymentStatus}</td> */}
                      <td>
                        <Link to={`/order/details/${order._id}`}>
                          <button type="button" className="btn btn-outline-info mx-1"><InfoOutlinedIcon /></button>
                        </Link>
                        <Link to={`/order/edit/${order._id}`}>
                          <button type="button" className="btn btn-outline-warning mx-1"><EditOutlinedIcon /></button>
                        </Link>
                        <Link to={`/order/delete/${order._id}`}>
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

export default Orders;
