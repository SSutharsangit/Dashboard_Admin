// CreateProduct.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

const Productcreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    supplier: '',
    price: 0,
    imageUrl: '',
    description: '',
    product_location: '',
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
      .post('http://localhost:5000/product/create', formData)
      .then(() => {
        console.log('Product created successfully');
        setLoading(false);
        navigate('/products');
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
            <div className="title h1 mt-4 text-primary col-10">Create New Product</div>
            <div className="button col-2 mt-4">
              <Link to="/products">
                <button type="button" className="btn btn-primary">
                  Go Products
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt-4" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom02" className="form-label">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                onChange={handleChange}
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom03" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                className="form-control"
                id="validationCustom03"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom04" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                onChange={handleChange}
                className="form-control"
                id="validationCustom04"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom05" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                className="form-control"
                id="validationCustom05"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom06" className="form-label">
                Product Location
              </label>
              <input
                type="text"
                name="product_location"
                onChange={handleChange}
                className="form-control"
                id="validationCustom06"
                required
              />
            </div>
            <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
              <button className="btn btn-primary text-center" type="submit">
                Create New Product
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Productcreate ;
