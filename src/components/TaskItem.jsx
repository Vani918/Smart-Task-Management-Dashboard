import React from 'react';

function TaskItem({ task, tasks, setTasks }) {
  const updateStatus = (status) => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, status } : t));
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div className={`task-item ${task.status.replace(' ', '').toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <select value={task.status} onChange={e => updateStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;
