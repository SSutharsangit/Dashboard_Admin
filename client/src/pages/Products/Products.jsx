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
import { setproductcount} from '../../redux/Slice/Prodcutslice';

function Products() {
  const dispatch = useDispatch()
  const [products,setproducts]=useState([]);
  const [loading,setloading] =useState(false);
  useEffect(()=>{
    setloading(true);
    axios
    .get("http://localhost:5000/product")
    .then((response)=>{
      dispatch(setproductcount(response.data.length))
      setproducts(response.data);
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
      <div className="div" style={{ flex: 1, overflow: 'auto', border: '2px solid white'}}>
        <div className="navbarcontainer">
          <div className='container-f navbar' style={{backgroundColor:"#096B88"}}>
            <div className="navbar-brand px-5 h6 text-white col-4">Productlist</div>
            <Link to="/product/create">
              <button type="button" className="btn btn-outline-light col-8">ADD NEW PRODUCT</button>
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
                    <th scope="col">Title</th>
                    <th scope="col">Suppiler</th>
                    <th scope="col">Price</th>
                    <th scope="col">ImageUrl</th>
                    {/* <th scope="col">Describtion</th> */}
                    <th scope="col">Location</th>
                    <th scope="col">Operations</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product._id}>
                      <td>{product.title}</td>
                      <td>{product.supplier}</td>
                      <td>{product.price}</td>
                      <td>{product.imageUrl}</td>
                      {/* <td>{product.description}</td> */}
                      <td>{product.product_location}</td>
                      <td>
                        <Link to={`/product/details/${product._id}`}>
                          <button type="button" className="btn btn-outline-info mx-1"><InfoOutlinedIcon /></button>
                        </Link>
                        <Link to={`/product/edit/${product._id}`}>
                          <button type="button" className="btn btn-outline-warning mx-1"><EditOutlinedIcon /></button>
                        </Link>
                        <Link to={`/product/delete/${product._id}`}>
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

export default Products;
