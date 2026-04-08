import React, { useState, useRef, useMemo } from 'react';
import * as d3 from 'd3-geo';
import districtData from '../data/districtData';
import maharashtraGeojson from '../data/maharashtra.json';
import DistrictTooltip from './DistrictTooltip';

// mapping GEOJSON names to our district data keys
const districtKeyMap = {
  'Ahmednagar': 'ahmednagar',
  'Akola': 'akola',
  'Amravati': 'amravati',
  'Aurangabad': 'aurangabad',
  'Bhandara': 'bhandara',
  'Bid': 'beed',
  'Buldana': 'buldhana',
  'Chandrapur': 'chandrapur',
  'Dhule': 'dhule',
  'Garhchiroli': 'gadchiroli',
  'Gondiya': 'gondia',
  'Greater Bombay': 'mumbai_city', 
  'Hingoli': 'hingoli',
  'Jalgaon': 'jalgaon',
  'Jalna': 'jalna',
  'Kolhapur': 'kolhapur',
  'Latur': 'latur',
  'Nagpur': 'nagpur',
  'Nanded': 'nanded',
  'Nandurbar': 'nandurbar',
  'Nashik': 'nashik',
  'Osmanabad': 'osmanabad',
  'Parbhani': 'parbhani',
  'Pune': 'pune',
  'Raigarh': 'raigad',
  'Ratnagiri': 'ratnagiri',
  'Sangli': 'sangli',
  'Satara': 'satara',
  'Sindhudurg': 'sindhudurg',
  'Solapur': 'solapur',
  'Thane': 'thane',
  'Wardha': 'wardha',
  'Washim': 'washim',
  'Yavatmal': 'yavatmal'
};

const MaharashtraMap = ({ onDistrictHover, onDistrictLeave, hoveredDistrict }) => {
  const mapRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const { paths, width, height } = useMemo(() => {
    const w = 800;
    const h = 600;
    
    // Fit the map into the 800x600 SVG with a bit of padding
    const projection = d3.geoIdentity().reflectY(true);
    const mercator = d3.geoMercator().fitSize([w, h], maharashtraGeojson);
    const pathGenerator = d3.geoPath().projection(mercator);
    
    const generatedPaths = maharashtraGeojson.features.map(feature => {
      const name = feature.properties.NAME_2;
      const dataKey = districtKeyMap[name];
      const centroid = pathGenerator.centroid(feature);
      
      return {
        id: dataKey || name.toLowerCase().replace(/ /g, '_'),
        name: name,
        d: pathGenerator(feature),
        centroid: { x: centroid[0], y: centroid[1] }
      };
    });
    
    return { paths: generatedPaths, width: w, height: h };
  }, []);

  const handleMouseEnter = (districtId, e) => {
    if (!mapRef.current) return;
    const mapRect = mapRef.current.getBoundingClientRect();
    const x = e.clientX - mapRect.left + 20;
    const y = e.clientY - mapRect.top - 10;
    setTooltipPos({ x, y });
    
    onDistrictHover(districtId);
  };

  const handleMouseMove = (e) => {
    if (hoveredDistrict && mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      const x = e.clientX - mapRect.left + 20;
      const y = e.clientY - mapRect.top - 10;
      setTooltipPos({ x, y });
    }
  };

  return (
    <div className="map-container" ref={mapRef}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="maharashtra-svg"
        onMouseMove={handleMouseMove}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>

        {/* State outline shadow */}
        <g filter="url(#drop-shadow)">
          {paths.map(p => (
            <path
              key={`shadow-${p.id}`}
              d={p.d}
              fill="#e8a040"
              stroke="none"
              transform="translate(2, 2)"
            />
          ))}
        </g>

        {/* District paths */}
        <g>
          {paths.map(p => (
            <path
              key={p.id}
              d={p.d}
              className={`district-path ${hoveredDistrict === p.id ? 'district-hovered' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(p.id, e)}
              onMouseLeave={onDistrictLeave}
              data-district={p.id}
            />
          ))}
        </g>

        {/* Dots */}
        {paths.map(p => (
          <g key={`dot-${p.id}`} className="district-dot-group">
            <circle
              cx={p.centroid.x}
              cy={p.centroid.y}
              r="7"
              className="district-dot-pulse"
            />
            <circle
              cx={p.centroid.x}
              cy={p.centroid.y}
              r="4.5"
              className="district-dot"
              onMouseEnter={(e) => handleMouseEnter(p.id, e)}
              onMouseLeave={onDistrictLeave}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredDistrict && districtData[hoveredDistrict] && (
        <DistrictTooltip
          district={districtData[hoveredDistrict]}
          position={tooltipPos}
        />
      )}
    </div>
  );
};

export default MaharashtraMap;
