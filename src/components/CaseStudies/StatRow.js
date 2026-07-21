import React from "react";

function StatRow({ stats }) {
  return (
    <div className="case-stat-row">
      {stats.map((stat, index) => (
        <div className="case-stat-tile" key={index}>
          <div className="case-stat-value">{stat.value}</div>
          <div className="case-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatRow;
