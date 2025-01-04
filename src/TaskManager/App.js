import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [tasksAdded, setTasksAdded] = useState(0); // Track added tasks
  const [tasksDeleted, setTasksDeleted] = useState(0); // Track deleted tasks

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage on tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setTasksAdded(tasksAdded + 1); 
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTasksDeleted(tasksDeleted + 1);
  };

  return (
    <div className="app-container">
      {/* Image Section */}
      <div className="image-container">
        <img src="/assets/todo-list.png" alt="To-Do List" className="task-image" />
      </div>

      {/* Task Manager Section */}
      <div className="task-manager">
        <h1>Task Manager App</h1>
        <div className="task-input">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.name}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* Display task added/deleted count with animation */}
        <div className={`task-feedback ${tasksAdded > 0 ? 'fade-in' : ''}`}>
          {tasksAdded > 0 && (
            <p>{tasksAdded} task{tasksAdded > 1 ? 's' : ''} added!</p>
          )}
        </div>

        <div className={`task-feedback ${tasksDeleted > 0 ? 'fade-in' : ''}`}>
          {tasksDeleted > 0 && (
            <p>{tasksDeleted} task{tasksDeleted > 1 ? 's' : ''} deleted!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
