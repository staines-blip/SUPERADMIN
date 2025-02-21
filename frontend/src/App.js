import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importing components
import SuperAdminLogin from './components/superadmin/superadminlogin';
import Dashboard from './pages/superadmin/superadmindashboard';
import Workers from './pages/superadmin/workers';  // Import Workers component

axios.defaults.baseURL = 'http://localhost:5000';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/superadmin/login" replace />} />
          
          {/* Superadmin routes */}
          <Route path="/superadmin/login" element={<SuperAdminLogin />} />
          <Route path="/superadmin/dashboard" element={<Dashboard />} />
          <Route path="/superadmin/admins" element={<div>Admins Page</div>} />
          <Route path="/superadmin/customers-vendors" element={<div>Customers & Vendors Page</div>} />
          <Route path="/superadmin/products" element={<div>Products Page</div>} />
          <Route path="/superadmin/units" element={<div>Units Page</div>} />
          <Route path="/superadmin/workers" element={<Workers />} />  {/* Updated Workers Page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
