import React from 'react';
import '../styles/LegendBox.css'; // 引入样式

const LegendBox = () => {
  // 定义不同火灾等级的信息
  const legendItems = [
    { color: 'green', label: 'Somewhat controllable', icon: '🔥' },
    { color: 'orange', label: 'General controllable', icon: '🔥' },
    { color: 'red', label: 'Under controllable', icon: '🔥' },
  ];

  return (
    <div className="legend-box">
      {legendItems.map((item, index) => (
        <div key={index} className="legend-item">
          <div
            className="legend-icon"
            style={{ backgroundColor: item.color }}
          >
            <span role="img" aria-label="fire">
              {item.icon}
            </span>
          </div>
          <span className="legend-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default LegendBox;
