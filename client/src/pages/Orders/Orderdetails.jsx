import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const Orderdetails = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/orders/${id}`)
      .then((response) => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching order details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleGoDashboard = () => {
    navigate('/orders'); 
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="card text-center mb-3" style={{ width: '30rem', backgroundColor: 'whitesmoke', color: '#2962ff' }}>
            <div className="card-body">
              <h5 className="card-title">Order Details...</h5>
              <p className="card-text">Order ID: {order._id}</p>
              <p className="card-text">User ID: {order.userId}</p>
              <p className="card-text">Customer ID: {order.customerId}</p>
              <p className="card-text">Product ID: {order.productId}</p>
              <p className="card-text">Quantity: {order.quantity}</p>
              <p className="card-text">Subtotal: {order.subtotal}</p>
              <p className="card-text">Total: {order.total}</p>
              <p className="card-text">Delivery Status: {order.delivery_status}</p>
              <p className="card-text">Payment Status: {order.payment_status}</p>
              <p className="card-text">Created At: {order.createdAt}</p>
              <p className="card-text">Updated At: {order.updatedAt}</p>

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

export default Orderdetails;
