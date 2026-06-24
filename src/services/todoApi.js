// Todo API Service - Mock Database with localStorage
const STORAGE_KEY = 'myapp_todos';

// Initialize sample todos
const sampleTodos = [
  {
    id: 1,
    title: 'Finish project proposal',
    description: 'Complete the Q3 project proposal document',
    priority: 'High',
    dueDate: '2026-07-15',
    status: 'pending',
    createdAt: new Date('2026-06-20').toISOString(),
  },
  {
    id: 2,
    title: 'Review team feedback',
    description: 'Review and compile feedback from team members',
    priority: 'Medium',
    dueDate: '2026-06-30',
    status: 'pending',
    createdAt: new Date('2026-06-18').toISOString(),
  },
  {
    id: 3,
    title: 'Update documentation',
    description: 'Update API documentation with new endpoints',
    priority: 'Medium',
    dueDate: '2026-07-05',
    status: 'completed',
    createdAt: new Date('2026-06-10').toISOString(),
  },
  {
    id: 4,
    title: 'Client presentation',
    description: 'Prepare slides for client presentation meeting',
    priority: 'High',
    dueDate: '2026-06-28',
    status: 'pending',
    createdAt: new Date('2026-06-19').toISOString(),
  },
  {
    id: 5,
    title: 'Code review',
    description: 'Review pull requests from the development team',
    priority: 'Low',
    dueDate: '2026-07-10',
    status: 'completed',
    createdAt: new Date('2026-06-15').toISOString(),
  },
];

// Initialize storage with sample todos if empty
export const initializeTodoStorage = () => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleTodos));
  }
};

// Get all todos with optional filtering
export const getTodos = async (filters = {}) => {
  const { search = '', status = 'all', priority = 'all' } = filters;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      
      let filtered = todos;

      // Filter by search term (title or description)
      if (search.trim()) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(todo =>
          todo.title.toLowerCase().includes(searchLower) ||
          todo.description.toLowerCase().includes(searchLower)
        );
      }

      // Filter by status
      if (status !== 'all') {
        filtered = filtered.filter(todo => todo.status === status);
      }

      // Filter by priority
      if (priority !== 'all') {
        filtered = filtered.filter(todo => todo.priority === priority);
      }

      // Sort by createdAt descending (newest tasks first)
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      resolve(filtered);
    }, 200);
  });
};

// Get single todo by ID
export const getTodoById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const todo = todos.find(t => t.id === id);
      resolve(todo || null);
    }, 150);
  });
};

// Create new todo
export const createTodo = async (todoData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate required fields
      if (!todoData.title || !todoData.title.trim()) {
        reject(new Error('Title is required'));
        return;
      }
      if (!todoData.priority) {
        reject(new Error('Priority is required'));
        return;
      }
      if (!todoData.dueDate) {
        reject(new Error('Due date is required'));
        return;
      }

      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      
      // Generate new ID
      const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
      
      const newTodo = {
        id: newId,
        title: todoData.title.trim(),
        description: todoData.description?.trim() || '',
        priority: todoData.priority,
        dueDate: todoData.dueDate,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      todos.push(newTodo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve(newTodo);
    }, 300);
  });
};

// Update existing todo
export const updateTodo = async (id, todoData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate required fields
      if (!todoData.title || !todoData.title.trim()) {
        reject(new Error('Title is required'));
        return;
      }
      if (!todoData.priority) {
        reject(new Error('Priority is required'));
        return;
      }
      if (!todoData.dueDate) {
        reject(new Error('Due date is required'));
        return;
      }

      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const todoIndex = todos.findIndex(t => t.id === id);

      if (todoIndex === -1) {
        reject(new Error('Todo not found'));
        return;
      }

      todos[todoIndex] = {
        ...todos[todoIndex],
        title: todoData.title.trim(),
        description: todoData.description?.trim() || '',
        priority: todoData.priority,
        dueDate: todoData.dueDate,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve(todos[todoIndex]);
    }, 300);
  });
};

// Toggle todo completion status
export const toggleTodoStatus = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const todo = todos.find(t => t.id === id);

      if (!todo) {
        reject(new Error('Todo not found'));
        return;
      }

      todo.status = todo.status === 'completed' ? 'pending' : 'completed';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve(todo);
    }, 200);
  });
};

// Delete todo
export const deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const filteredTodos = todos.filter(t => t.id !== id);

      if (filteredTodos.length === todos.length) {
        reject(new Error('Todo not found'));
        return;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTodos));
      resolve(true);
    }, 250);
  });
};

// Get todo statistics
export const getTodoStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const completed = todos.filter(t => t.status === 'completed').length;
      const pending = todos.filter(t => t.status === 'pending').length;
      const total = todos.length;
      const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      resolve({
        total,
        completed,
        pending,
        completionPercentage,
      });
    }, 150);
  });
};

// Get available priorities
export const getPriorities = () => ['High', 'Medium', 'Low'];

// Get available statuses
export const getStatuses = () => ['pending', 'completed'];
