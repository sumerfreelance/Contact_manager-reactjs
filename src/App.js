import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/common/Navbar/Navbar';
// import Header from './component/common/Header/Header';
import RegistrationForm from './component/common/Register/Register';
import HomePage from './component/common/Home/Home';
import AboutPage from './component/common/About/About';
import LoginPage from './component/common/Login/Login';
import Footer from './component/common/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
