import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

const Orderedit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/orders/${id}`, formData)
      .then(() => {
        console.log("Edit successful");
        navigate("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/orders/${id}`)
      .then((response) => {
        console.log('Order data:', response.data);
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
        alert('Error fetching order data. See console for details.');
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container border border-primary mt-20 px-5" style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
          <div className="topform row d-flex align-items-center">
            <div className="title h1 mt-20 text-primary col-10">Edit Order</div>
            <div className="button col-2 mt-20">
              <Link to="/orders">
                <button type="button" className="btn btn-primary">Go Orders</button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt-20" noValidate onSubmit={handleEdit}>
            <div>
              <label htmlFor="userId" className="form-label">User ID</label>
              <input
                type="text"
                name='userId'
                value={formData.userId}
                onChange={handleChange}
                className="form-control"
                id="userId"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">Customer ID</label>
              <input
                type="text"
                name='customerId'
                value={formData.customerId}
                onChange={handleChange}
                className="form-control"
                id="customerId"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">Customer ID</label>
              <input
                type="text"
                name=' productId'
                value={formData.productId}
                onChange={handleChange}
                className="form-control"
                id=" productId"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">Quantity</label>
              <input
                type="text"
                name='quantity'
                value={formData.quantity}
                onChange={handleChange}
                className="form-control"
                id="quantity"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">Subtotal</label>
              <input
                type="text"
                name='subtotal'
                value={formData.subtotal}
                onChange={handleChange}
                className="form-control"
                id="subtotal"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">Total</label>
              <input
                type="text"
                name='total'
                value={formData.total}
                onChange={handleChange}
                className="form-control"
                id="total"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">DeliveryStatus</label>
              <input
                type="text"
                name='delivery_status'
                value={formData.delivery_status}
                onChange={handleChange}
                className="form-control"
                id="delivery_status"
                required
              />
            </div>
            <div>
              <label htmlFor="customerId" className="form-label">PaymentStatus</label>
              <input
                type="text"
                name='payment_status'
                value={formData.payment_status}
                onChange={handleChange}
                className="form-control"
                id="payment_status"
                required
              />
            </div>
            <div className="col-12 mt-20 mb-20 d-flex justify-content-center mt-4 mb-4">
              <button className="btn btn-primary text-center" type="submit">Edit Order</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Orderedit;
