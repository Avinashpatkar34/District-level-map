import React from 'react';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-dots">
        <span className="dot dot-green"></span>
        <span className="dot dot-orange"></span>
      </div>
      <h1 className="header-title">Dashboard</h1>
      <div className="header-dots">
        <span className="dot dot-orange"></span>
        <span className="dot dot-green-outline"></span>
        <span className="dot dot-blue"></span>
      </div>
      <p className="header-subtitle">Know Your Internship Overview &amp; Progress</p>
    </header>
  );
};

export default Header;
