import React from 'react';

function DashboardSummary({ tasks }) {
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const pending = tasks.length - completed;

  return (
    <div className="dashboard-summary">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </div>
  );
}

export default DashboardSummary;
