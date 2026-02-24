import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import DashboardSummary from './components/DashboardSummary';
import { loadTasks, saveTasks } from './utils/storage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks
    .filter(t => statusFilter === 'All' || t.status === statusFilter)
    .filter(t => priorityFilter === 'All' || t.priority === priorityFilter)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div className="app-container">
      <h1>Smart Task Management Dashboard</h1>

      <DashboardSummary tasks={tasks} />

      <TaskForm tasks={tasks} setTasks={setTasks} />

      <div className="filters">
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
