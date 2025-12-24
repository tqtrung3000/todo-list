import React from 'react';
import './MyTasks.css';

/**
 * MyTasks Component - Hiển thị tiêu đề và thanh tiến độ tổng quát
 */
const MyTasks = () => {
  return (
    <div className="my-tasks-card">
      <div className="my-tasks-header">
        <div className="my-tasks-info">
          <h2 className="my-tasks-title">My Tasks</h2>
          <p className="my-tasks-subtitle">Keep it up! You're making great progress.</p>
        </div>
        {/* Nhãn Today's Agenda */}
        <div className="my-tasks-badge">
          Today's Agenda
        </div>
      </div>
      
      {/* Khu vực hiển thị tiến độ */}
      <div className="my-tasks-progress-section">
        <div className="progress-labels">
          <span className="progress-label">Daily Progress</span>
          <span className="progress-percentage">60%</span>
        </div>
        
        {/* Thanh Progress Bar */}
        <div className="progress-bar-container">
          {/* Thanh màu đỏ bên trong (hiện đang để tĩnh 60%) */}
          <div className="progress-bar-fill" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
