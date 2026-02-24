import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      {tasks.length === 0 && <p>No tasks available</p>}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
