import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ItemDisplayPage from './pages/ItemDisplayPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
      <div>
        {/* Navigation */}
        <nav style={{ padding: '10px', backgroundColor: '#f8f8f8', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/items" style={{ marginRight: '10px' }}>Items</Link>
          <Link to="/login">Login</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage name={"Mark"}></LandingPage>} />
          <Route path="/items" element={<ItemDisplayPage />} />
          <Route path='/login' element={<LoginPage /> } />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
