import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill }
 from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
        <div className="headingContainer">
            {/* <img src="" alt="" /> */}
  <h1 className="headingText" style={{color:"#096B88"}}>ReCycLo</h1>
</div>

            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <div>
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/products">
                    <div>
                        <BsFillArchiveFill className='icon'/> Products
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/orders">
                    <div>
                        <BsFillGrid3X3GapFill className='icon'/> Orders
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/customers">
                    <div>
                        <BsPeopleFill className='icon'/> Customers
                    </div>
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/reports">
                    <div>
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/setting">
                    <div>
                        <BsFillGearFill className='icon'/> Setting
                    </div>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
