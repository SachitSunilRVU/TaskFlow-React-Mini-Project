export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <div className="empty-state"><div className="empty-icon">✓</div><h3>All clear for now</h3><p>Add a task or change your filters to see more.</p></div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <article className={`task-row ${task.completed ? "is-complete" : ""}`} key={task.id}>
          <button className={`check-button ${task.completed ? "checked" : ""}`}
            aria-label={task.completed ? `Mark ${task.title} pending` : `Complete ${task.title}`}
            onClick={() => onToggle(task)}>{task.completed ? "✓" : ""}</button>
          <div className="task-copy">
            <h3>{task.title}</h3>
            <div className="task-meta"><span className={`priority priority-${task.priority.toLowerCase()}`}>{task.priority} priority</span><span>{task.completed ? "Completed" : "In progress"}</span></div>
          </div>
          <button className="delete-button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`} title="Delete task">×</button>
        </article>
      ))}
    </div>
  );
}