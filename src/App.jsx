import React, { useState } from 'react';
import Header from './components/Header';
import MaharashtraMap from './components/MaharashtraMap';
import StatCard from './components/StatCard';
import statsData from './data/statsData';
import './App.css';

function App() {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handleDistrictHover = (districtId) => {
    setHoveredDistrict(districtId);
  };

  const handleDistrictLeave = () => {
    setHoveredDistrict(null);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <div className="map-section">
          <MaharashtraMap
            onDistrictHover={handleDistrictHover}
            onDistrictLeave={handleDistrictLeave}
            hoveredDistrict={hoveredDistrict}
          />
        </div>
        <div className="stats-section">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
