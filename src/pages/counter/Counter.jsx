import { useState } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const progress = (count / 10) * 100;

  return (
    <div className="counter-container">
      <div className="counter-card">
        {/* Header */}
        <div className="counter-header">
          <h1>Counter Application</h1>
          <p>A modern, interactive counter with smooth animations and visual feedback.</p>
        </div>

        {/* Counter Display */}
        <div className="counter-display">
          <div className="counter-value">{count}</div>
          <p className="counter-label">Current Count</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">{count} / 10</p>
        </div>

        {/* Status */}
        <div className="counter-status">
          {count === 10 && (
            <div className="status-badge status-success">
              ✓ Maximum reached!
            </div>
          )}
          {count === 0 && (
            <div className="status-badge status-info">
              ℹ Click + to start counting
            </div>
          )}
          {count > 0 && count < 10 && (
            <div className="status-badge status-active">
              ◉ Count: {10 - count} to max
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="counter-buttons">
          <button
            className="btn btn-sm btn-secondary"
            onClick={handleDecrement}
            disabled={count === 0}
            title="Decrease counter"
          >
            − Decrease
          </button>
          <button
            className="btn btn-sm btn-outline"
            onClick={handleReset}
            disabled={count === 0}
            title="Reset counter"
          >
            ↺ Reset
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={handleIncrement}
            disabled={count === 10}
            title="Increase counter"
          >
            + Increase
          </button>
        </div>

        {/* Info Box */}
        <div className="counter-info">
          <h3>Features</h3>
          <ul>
            <li>Counter ranges from 0 to 10</li>
            <li>Visual progress indicator</li>
            <li>Smooth animations and transitions</li>
            <li>Accessible button controls</li>
            <li>Real-time status feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Counter;
