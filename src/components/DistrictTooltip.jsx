import React from 'react';

const DistrictTooltip = ({ district, position }) => {
  if (!district) return null;

  return (
    <div className="district-tooltip" style={{ left: position.x, top: position.y }}>
      <div className="tooltip-header">
        <span>Interns Summary</span>
      </div>
      <table className="tooltip-table">
        <tbody>
          <tr>
            <td className="tooltip-label">District</td>
            <td className="tooltip-value district-name">{district.name}</td>
          </tr>
          <tr>
            <td className="tooltip-label">Total Intern</td>
            <td className="tooltip-value">{district.totalIntern.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">HSC</td>
            <td className="tooltip-value">{district.hsc.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">ITI/Diploma</td>
            <td className="tooltip-value">{district.itiDiploma.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">Graduate/Post Graduate</td>
            <td className="tooltip-value">{district.graduatePostGraduate.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">Total Employer</td>
            <td className="tooltip-value">{district.totalEmployer.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">Government Employer</td>
            <td className="tooltip-value">{district.governmentEmployer.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="tooltip-label">Private Employer</td>
            <td className="tooltip-value">{district.privateEmployer.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DistrictTooltip;
