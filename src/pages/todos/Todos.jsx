import { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoCard from '../../components/TodoCard';
import TodoStats from '../../components/TodoStats';
import Modal from '../../components/Modal';
import ConfirmDialog from '../../components/ConfirmDialog';
import Toast from '../../components/Toast';
import {
  getTodos,
  getTodoStats,
  createTodo,
  updateTodo,
  toggleTodoStatus,
  deleteTodo,
  initializeTodoStorage,
  getPriorities,
} from '../../services/todoApi';
import './todos.css';

function Todos() {
  // State management
  const [todos, setTodos] = useState([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0, completionPercentage: 0 });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Filter and search state
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsTodo, setDetailsTodo] = useState(null);

  // Confirm dialog state
  const [showConfirm, setShowConfirm] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  // Initialize storage on mount
  useEffect(() => {
    initializeTodoStorage();
    loadTodos();
  }, []);

  // Load todos based on filters
  useEffect(() => {
    loadTodos();
  }, [searchQuery, filterStatus, filterPriority]);

  // Load todos and stats
  const loadTodos = async () => {
    try {
      setLoading(true);
      const [todosData, statsData] = await Promise.all([
        getTodos({
          search: searchQuery,
          status: filterStatus,
          priority: filterPriority,
        }),
        getTodoStats(),
      ]);
      setTodos(todosData);
      setStats(statsData);
    } catch (error) {
      showToast('Failed to load tasks', 'error');
      console.error('Error loading todos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Add new todo
  const handleAddTodo = async (formData) => {
    try {
      setSubmitting(true);
      await createTodo(formData);
      setShowAddModal(false);
      showToast('Task added successfully!', 'success');
      await loadTodos();
    } catch (error) {
      showToast(error.message || 'Failed to add task', 'error');
      console.error('Error adding todo:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Edit todo
  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setShowEditModal(true);
  };

  // Update todo
  const handleUpdateTodo = async (formData) => {
    try {
      setSubmitting(true);
      await updateTodo(editingTodo.id, formData);
      setShowEditModal(false);
      setEditingTodo(null);
      showToast('Task updated successfully!', 'success');
      await loadTodos();
    } catch (error) {
      showToast(error.message || 'Failed to update task', 'error');
      console.error('Error updating todo:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Delete todo with confirmation
  const handleDeleteClick = (todoId) => {
    setTodoToDelete(todoId);
    setShowConfirm(true);
  };

  // Confirm delete
  const handleConfirmDelete = async () => {
    try {
      setSubmitting(true);
      await deleteTodo(todoToDelete);
      setShowConfirm(false);
      setTodoToDelete(null);
      showToast('Task deleted successfully!', 'success');
      await loadTodos();
    } catch (error) {
      showToast(error.message || 'Failed to delete task', 'error');
      console.error('Error deleting todo:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle todo completion
  const handleToggleTodo = async (todoId) => {
    try {
      await toggleTodoStatus(todoId);
      showToast('Task status updated!', 'success');
      await loadTodos();
    } catch (error) {
      showToast(error.message || 'Failed to update task', 'error');
      console.error('Error toggling todo:', error);
    }
  };

  // View todo details
  const handleViewDetails = (todo) => {
    setDetailsTodo(todo);
    setShowDetails(true);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get pending and completed todos separately
  const pendingTodos = todos.filter(todo => todo.status === 'pending');
  const completedTodos = todos.filter(todo => todo.status === 'completed');

  return (
    <div className="todos-container">
      {/* Header */}
      <div className="todos-header">
        <div className="todos-header-content">
          <h1 className="todos-title">📝 Task Manager</h1>
          <p className="todos-subtitle">Organize and track your tasks efficiently</p>
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => setShowAddModal(true)}
        >
          + New Task
        </button>
      </div>

      {/* Stats */}
      <TodoStats stats={stats} />

      {/* Search and Filters */}
      <div className="todos-toolbar">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
            title="Filter by status"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="filter-select"
            title="Filter by priority"
          >
            <option value="all">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading tasks...</p>
        </div>
      ) : (
        <>
          {/* Pending Tasks */}
          {pendingTodos.length > 0 && (
            <div className="todos-section">
              <div className="section-header">
                <h2 className="section-title">⏳ Pending Tasks ({pendingTodos.length})</h2>
              </div>
              <div className="todos-list">
                {pendingTodos.map(todo => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                    onToggle={handleToggleTodo}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed Tasks */}
          {completedTodos.length > 0 && (
            <div className="todos-section">
              <div className="section-header">
                <h2 className="section-title">✓ Completed Tasks ({completedTodos.length})</h2>
              </div>
              <div className="todos-list">
                {completedTodos.map(todo => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                    onToggle={handleToggleTodo}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {todos.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3 className="empty-title">No tasks found</h3>
              <p className="empty-description">
                {searchQuery || filterStatus !== 'all' || filterPriority !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Click "+ New Task" to get started!'}
              </p>
              {(searchQuery || filterStatus !== 'all' || filterPriority !== 'all') && (
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSearchQuery('');
                    setFilterStatus('all');
                    setFilterPriority('all');
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </>
      )}

      {/* Add Todo Modal */}
      <Modal
        isOpen={showAddModal}
        title="Add New Task"
        onClose={() => setShowAddModal(false)}
        confirmText="Add Task"
      >
        <TodoForm
          onSubmit={handleAddTodo}
          isLoading={submitting}
        />
      </Modal>

      {/* Edit Todo Modal */}
      <Modal
        isOpen={showEditModal}
        title="Edit Task"
        onClose={() => {
          setShowEditModal(false);
          setEditingTodo(null);
        }}
        confirmText="Update Task"
      >
        {editingTodo && (
          <TodoForm
            initialData={editingTodo}
            onSubmit={handleUpdateTodo}
            isLoading={submitting}
          />
        )}
      </Modal>

      {/* Details Modal */}
      <Modal
        isOpen={showDetails}
        title="Task Details"
        onClose={() => {
          setShowDetails(false);
          setDetailsTodo(null);
        }}
      >
        {detailsTodo && (
          <div className="todo-details">
            <div className="detail-item">
              <label>Title</label>
              <p>{detailsTodo.title}</p>
            </div>
            <div className="detail-item">
              <label>Description</label>
              <p>{detailsTodo.description || 'No description'}</p>
            </div>
            <div className="detail-row">
              <div className="detail-item">
                <label>Priority</label>
                <p>{detailsTodo.priority}</p>
              </div>
              <div className="detail-item">
                <label>Status</label>
                <p className={`status-badge status-${detailsTodo.status}`}>
                  {detailsTodo.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
                </p>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-item">
                <label>Due Date</label>
                <p>{formatDate(detailsTodo.dueDate)}</p>
              </div>
              <div className="detail-item">
                <label>Created</label>
                <p>{formatDate(detailsTodo.createdAt)}</p>
              </div>
            </div>
            <div className="detail-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowDetails(false);
                  handleEditClick(detailsTodo);
                }}
              >
                Edit Task
              </button>
              <button
                className="btn btn-error"
                onClick={() => {
                  setShowDetails(false);
                  handleDeleteClick(detailsTodo.id);
                }}
              >
                Delete Task
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={showConfirm}
        title="Delete Task?"
        message="Are you sure you want to delete this task? This action cannot be undone."
        isDangerous={true}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setShowConfirm(false);
          setTodoToDelete(null);
        }}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Todos;
