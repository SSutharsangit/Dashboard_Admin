// OrderCreate.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

const Ordercreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    customerId: '',
    productId: '',
    quantity: 0,
    subtotal: 0,
    total: 0,
    delivery_status: '',
    payment_status: '',
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
      .post('http://localhost:5000/orders', formData) // Replace with your server endpoint
      .then(() => {
        console.log('Order created successfully');
        setLoading(false);
        navigate('/orders');
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
            <div className="title h1 mt-4 text-primary col-10">Create New Order</div>
            <div className="button col-2 mt-4">
              <Link to="/orders">
                <button type="button" className="btn btn-primary">
                  Go Orders
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt-4" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom02" className="form-label">
                Customer ID
              </label>
              <input
                type="text"
                name="customerId"
                onChange={handleChange}
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom03" className="form-label">
                Product ID
              </label>
              <input
                type="text"
                name="productId"
                onChange={handleChange}
                className="form-control"
                id="validationCustom03"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom04" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                className="form-control"
                id="validationCustom04"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom05" className="form-label">
                Subtotal
              </label>
              <input
                type="number"
                name="subtotal"
                onChange={handleChange}
                className="form-control"
                id="validationCustom05"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom06" className="form-label">
                Total
              </label>
              <input
                type="number"
                name="total"
                onChange={handleChange}
                className="form-control"
                id="validationCustom06"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom07" className="form-label">
                Delivery Status
              </label>
              <input
                type="text"
                name="delivery_status"
                onChange={handleChange}
                className="form-control"
                id="validationCustom07"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom08" className="form-label">
                Payment Status
              </label>
              <input
                type="text"
                name="payment_status"
                onChange={handleChange}
                className="form-control"
                id="validationCustom08"
                required
              />
            </div>
            <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
              <button className="btn btn-primary text-center" type="submit">
                Create New Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Ordercreate;
