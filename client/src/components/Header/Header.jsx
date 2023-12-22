import React, { useState, useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BsJustify}from 'react-icons/bs'
import "./Header.css"


function Header({ OpenSidebar }) {
  const [adminData, setAdminData] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    
    const storedAdminData = localStorage.getItem('userData');

    if (storedAdminData) {
      setAdminData(JSON.parse(storedAdminData));
    }
  }, []);
  console.log(adminData);



  const handleLogout = () => {
  
   localStorage.removeItem('userData');

   setAdminData(null);
   navigate("/login");

  };

  return (
    <header className='header' style={{ backgroundColor: 'rgb(29, 38, 52)', color: 'rgb(158, 158, 164)', fontFamily: 'Montserrat, sans-serif' }}>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {adminData && (
          <>
            <p>{adminData.username}</p>
          </>
        )}
      </div>
      <div className='header-right'>
        <button type='button' className='btn btn-light' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
