import './todostats.css';

function TodoStats({ stats }) {
  return (
    <div className="todo-stats-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <div className="stat-value">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <div className="stat-value">{stats.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{stats.completionPercentage}%</div>
            <div className="stat-label">Completion</div>
          </div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-label">
          <span>Progress</span>
          <span className="progress-percent">{stats.completionPercentage}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${stats.completionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;
