import './App.css';
import { Route, Routes } from 'react-router-dom';
import Setting from './pages/Setting/Setting';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Categories from './pages/Orders/Orders';
import Customers from './pages/Customers/Customers';
import Reports from './pages/Reports/Reports';
import Productdetails from './pages/Products/Productdetails';
import Productedit from './pages/Products/Productedit';
import Productdelete from './pages/Products/Productdelete';
import Orderdetails from './pages/Orders/Orderdetails';
import Orderedit from './pages/Orders/Orderedit';
import Orderdelete from './pages/Orders/Orderdelete';
import Customerdetails from './pages/Customers/Customerdetails';
import Customeredit from './pages/Customers/Customeredit';
import Customerdelete from './pages/Customers/Customerdelete';
import Productcreate from './pages/Products/Productcreate';
import Ordercreate from './pages/Orders/Ordercreate';
import Customercreate from './pages/Customers/Customercreate';
import Orders from './pages/Orders/Orders';
import AdminDelete from './pages/Admindelete';
import Login from './pages/Login';



function App() {
  return (
    // <div>
    //   {/* <Customers/> */}
    //   <Categories/>
    // </div>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/setting' element={<Setting />} />
      <Route path='/products' element={<Products />} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/product/create' element={<Productcreate/>}></Route>
      <Route path='/product/details/:id' element={<Productdetails/>} />
      <Route path='/product/edit/:id' element={<Productedit/>} />
      <Route path='/product/delete/:id' element={<Productdelete/>} />
      <Route path='/order/create' element={<Ordercreate/>}></Route>
      <Route path='/order/details/:id' element={<Orderdetails/>} />
      <Route path='/order/edit/:id' element={<Orderedit/>} />
      <Route path='/order/delete/:id' element={<Orderdelete/>} />
      <Route path='/customer/create' element={<Customercreate/>}></Route>
      <Route path='/customer/details/:id' element={<Customerdetails/>} />
      <Route path='/customer/edit/:id' element={<Customeredit/>} />
      <Route path='/customer/delete/:id' element={<Customerdelete/>} />
      <Route path='/admin/:id' element={<AdminDelete/>} />
      <Route path='/login' element={<Login/>} />
      
    </Routes>
  );
}

export default App;
