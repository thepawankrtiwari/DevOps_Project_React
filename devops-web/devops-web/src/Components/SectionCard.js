import React from 'react';

const SectionCard = ({ title, points }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionCard;
