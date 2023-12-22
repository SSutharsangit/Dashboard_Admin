import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const OrderDelete = () => {
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
        alert(error);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/orders/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/orders");
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
              <h5 className="card-title">Are you sure you want to delete this order?</h5>
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

              <Link to="/orders">
                <button className="btn btn-danger" style={{ marginRight: '30px' }} onClick={handleDelete}>
                  Yes, delete
                </button>
              </Link>
              <Link to="/orders">
                <button className="btn btn-success">No</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDelete;
