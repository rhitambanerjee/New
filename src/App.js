import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MdInventory2 } from "react-icons/md";
import './index.css';
import User from './components/User';
import logo from './img/logo.jpg'

function Users() {
  return (
    <div>
      <User />
      {/* Your Users component content goes here */}
    </div>
  );
}

function Role() {
  return (
    <div>
      <h2>Role Content Goes Here</h2>
      {/* Your Role component content goes here */}
    </div>
  );
}

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
      <div className={`body-area${showNav ? ' body-pd' : ''}`}>
        <header className={`header${showNav ? ' body-pd' : ''}`}>
          <div className="header_toggle">
            <i
              className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </header>
        <div className={`l-navbar${showNav ? ' show' : ''}`}>
          <nav className="nav">
            <div>
              <Link to="/" className="nav_logo">
                <img src={logo} style={{height:"25px",width:"25px",borderWidth:"10px"}}/>
                <span className="nav_logo-name">FemiZone</span>
              </Link>
              <div className="nav_list">
                <Link to="/users" className="nav_link">
                  <i className="bi bi-people nav_icon" />
                  <span className="nav_name">Customer</span>
                </Link>
                <Link to="/role" className="nav_link">
                  <MdInventory2 />
                  <span className="nav_name">Inventory</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="pt-4 pb-4">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/role" element={<Role />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
