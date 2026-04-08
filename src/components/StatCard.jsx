import React from 'react';

const StatCard = ({ value, label, icon, gradient }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'briefcase':
        return (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-icon">
            <rect x="8" y="20" width="48" height="36" rx="4" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <path d="M22 20V14a4 4 0 014-4h12a4 4 0 014 4v6" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <line x1="8" y1="36" x2="56" y2="36" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
            <rect x="26" y="32" width="12" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
          </svg>
        );
      case 'badge':
        return (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-icon">
            <rect x="12" y="4" width="40" height="52" rx="4" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <circle cx="32" cy="22" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <line x1="20" y1="40" x2="44" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
            <line x1="20" y1="46" x2="44" y2="46" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
          </svg>
        );
      case 'factory':
        return (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-icon">
            <rect x="6" y="30" width="52" height="28" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <polygon points="6,30 6,14 22,30" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <polygon points="22,30 22,14 38,30" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <rect x="42" y="10" width="12" height="20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <rect x="14" y="40" width="8" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="28" y="40" width="8" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="42" y="40" width="8" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
          </svg>
        );
      case 'people':
        return (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-icon">
            <circle cx="24" cy="18" r="8" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <path d="M8 52c0-10 7-18 16-18s16 8 16 18" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
            <circle cx="44" cy="22" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <path d="M36 52c2-8 6-14 12-14s8 4 10 14" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <circle cx="32" cy="56" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
            <path d="M30 60l2-3 2 3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="stat-card" style={{ background: gradient }}>
      <div className="stat-content">
        <div className="stat-text">
          <span className="stat-value">{value}</span>
          <span className="stat-label">{label}</span>
        </div>
        <div className="stat-icon-wrapper">
          {getIcon(icon)}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
