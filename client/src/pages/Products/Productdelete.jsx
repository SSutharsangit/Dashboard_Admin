import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const Productdelete = () => {
  const [Product,setProduct]=useState({});
  const [loading,setloading]=useState(false);
  const {id}=useParams();
  const navigate= useNavigate();
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
        setloading(false);
      })
      .catch((error) => {
        alert(error);
        setloading(false);
      });
  }, [id]);
  const handledelete=()=>{
    axios
    .delete(`http://localhost:5000/product/${id}`)
    .then((response) => {
      setloading(false);
      navigate("/products");
    })
    .catch((error) => {
      alert(error);
      setloading(false);
    });

  };
  return (
    <div>
    {loading ? (
      <Loading/>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="card text-center mb-3" style={{ width: '30rem' , backgroundColor: 'whitesmoke', color: '#2962ff' }}>
          <div className="card-body">
            <h5 className="card-title">Are you want to delete Product?</h5>
            <p className="card-text">{Product.title}</p>
            <Link to={"/products"}>
            <button className="btn btn-danger" style={{marginRight:'30px'}} onClick={handledelete} >
             yes,sure..
            </button>
            </Link>
            <Link to={"/products"}>
            <button className="btn btn-success" >
             No
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Productdelete ;