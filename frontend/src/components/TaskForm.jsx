import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) {
      setMessage("Please enter a task title.");
      return;
    }
    try {
      setSaving(true);
      setMessage("");
      await onAdd({ title: title.trim(), priority });
      setTitle("");
      setPriority("Medium");
      setMessage("Task added successfully.");
    } catch (error) {
      setMessage(error.message || "Could not add task.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="task-title">Task title</label>
      <input id="task-title" value={title} onChange={e => setTitle(e.target.value)}
        placeholder="e.g. Finish assignment" maxLength={100} />
      <label htmlFor="task-priority">Priority</label>
      <select id="task-priority" value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option><option>Medium</option><option>Low</option>
      </select>
      <button className="primary-button" type="submit" disabled={saving}>{saving ? "Adding…" : "＋ Add task"}</button>
      {message && <p className="form-message" role="status">{message}</p>}
    </form>
  );
}