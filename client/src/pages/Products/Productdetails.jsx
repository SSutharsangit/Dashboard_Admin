import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleGoDashboard = () => {
    navigate('/products'); // Update the route as needed
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div className="card text-center mb-3" style={{ width: '30rem', backgroundColor: 'whitesmoke', color: '#2962ff' }}>
            <div className="card-body">
              <h5 className="card-title">{product.title} Details...</h5>
              <p className="card-text">ID: {product._id}</p>
              <p className="card-text">Supplier: {product.supplier}</p>
              <p className="card-text">Price: {product.price}</p>
              <p className="card-text">Image URL: {product.imageUrl}</p>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Location: {product.product_location}</p>
              <p className="card-text">Created At: {product.createdAt}</p>
              <p className="card-text">Updated At: {product.updatedAt}</p>

              
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

export default ProductDetails;
