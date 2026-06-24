import './todocard.css';

function TodoCard({ todo, onEdit, onDelete, onToggle }) {
  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'No due date';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Check if todo is overdue
  const isOverdue = () => {
    if (todo.status === 'completed' || !todo.dueDate) return false;
    const dueDate = new Date(todo.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today;
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#ef4444'; // red
      case 'Medium':
        return '#f59e0b'; // amber
      case 'Low':
        return '#10b981'; // green
      default:
        return '#6b7280'; // gray
    }
  };

  // Get priority icon
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High':
        return '⚡';
      case 'Medium':
        return '→';
      case 'Low':
        return '⬇';
      default:
        return '◆';
    }
  };

  return (
    <div className={`todo-card ${todo.status === 'completed' ? 'completed' : ''} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="todo-checkbox-wrapper">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          className="todo-checkbox"
          checked={todo.status === 'completed'}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark ${todo.title} as ${todo.status === 'completed' ? 'pending' : 'completed'}`}
        />
        <label htmlFor={`todo-${todo.id}`} className="checkbox-label"></label>
      </div>

      <div className="todo-content">
        <div className="todo-header">
          <h3 className="todo-title">{todo.title}</h3>
          <div className="todo-badges">
            <span className={`status-badge status-${todo.status}`}>
              {todo.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
            </span>
            <span
              className="priority-badge"
              style={{ borderLeftColor: getPriorityColor(todo.priority) }}
              title={`Priority: ${todo.priority}`}
            >
              {getPriorityIcon(todo.priority)} {todo.priority}
            </span>
            {isOverdue() && <span className="overdue-badge">🔴 Overdue</span>}
          </div>
        </div>

        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}

        <div className="todo-footer">
          <span className="todo-date">
            {todo.dueDate ? `📅 ${formatDate(todo.dueDate)}` : 'No due date'}
          </span>
          <div className="todo-actions">
            <button
              className="todo-action-btn edit-btn"
              onClick={() => onEdit(todo)}
              title="Edit task"
              aria-label={`Edit ${todo.title}`}
            >
              ✎
            </button>
            <button
              className="todo-action-btn delete-btn"
              onClick={() => onDelete(todo.id)}
              title="Delete task"
              aria-label={`Delete ${todo.title}`}
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
