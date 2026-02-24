import React, { useState } from 'react';

function TaskForm({ tasks, setTasks }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    status: 'To Do'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setTask({ title: '', description: '', priority: 'Medium', dueDate: '', status: 'To Do' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input required placeholder="Task Title" value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })} />

      <textarea placeholder="Description" value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })} />

      <select value={task.priority}
        onChange={e => setTask({ ...task, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input type="date" value={task.dueDate}
        onChange={e => setTask({ ...task, dueDate: e.target.value })} />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
