import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Loading from '../Loading';

const Productedit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/product/${id}`, formData)
      .then(() => {
        console.log("Edit successful");
        navigate("/products")
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((response) => {
        console.log('Product data:', response.data);
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        alert('Error fetching product data. See console for details.');
        setLoading(false);
      });
  }, [id]);
  

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="div container border border-primary mt20 px-5" style={{ backgroundColor: 'whitesmoke', color: '#2962ff' }}>
          <div className="topform row d-flex align-items-center">
            <div className="title h1 mt20 text-primary col-10">Edit Product </div>
            <div className="button col-2 mt20">
              <Link to={"/"}>
                <button type="button" className="btn btn-primary">Go Dashboard</button>
              </Link>
            </div>
          </div>
          <hr />
          <form className="g-3 rounded mt20" noValidate onSubmit={handleEdit}>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Title
              </label>
              <input
                type="text"
                name='title'
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Supplier
              </label>
              <input
                type="text"
                name='supplier'
                value={formData.supplier}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Price
              </label>
              <input
                type="number"
                name='price'
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                name='imageUrl'
                value={formData.imageUrl}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Description
              </label>
              <input
                type="text"
                name='description'
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                Product Location
              </label>
              <input
                type="text"
                name='product_location'
                value={formData.product_location}
                onChange={handleChange}
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div class="col-12 mt20 mb20 d-flex justify-content-center mt-4 mb-4">
              <button class="btn btn-primary text-center" type="submit">Edit Product</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Productedit;
