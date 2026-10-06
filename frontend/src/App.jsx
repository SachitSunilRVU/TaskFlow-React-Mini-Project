import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import StatsPanel from "./components/StatsPanel.jsx";
import About from "./pages/About.jsx";

const API = "http://localhost:5000/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    try {
      setError("");
      const response = await fetch(`${API}/tasks`);
      if (!response.ok) throw new Error("Could not load tasks.");
      setTasks(await response.json());
    } catch {
      setError("Could not connect to the backend. Make sure the server is running in the other terminal.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  async function addTask(taskData) {
    const response = await fetch(`${API}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Could not add task.");
    setTasks(current => [data, ...current]);
  }

  async function toggleTask(task) {
    const response = await fetch(`${API}/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });
    if (!response.ok) throw new Error("Could not update task.");
    const updated = await response.json();
    setTasks(current => current.map(item => item.id === updated.id ? updated : item));
  }

  async function deleteTask(id) {
    const response = await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Could not delete task.");
    setTasks(current => current.filter(task => task.id !== id));
  }

  const visibleTasks = useMemo(() => tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" ||
      (status === "Pending" && !task.completed) ||
      (status === "Completed" && task.completed);
    const matchesPriority = priority === "All" || task.priority === priority;
    return matchesSearch && matchesStatus && matchesPriority;
  }), [tasks, search, status, priority]);

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <main className="page">
      <section className="welcome">
        <div>
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h1>Make room for <span>great work.</span></h1>
          <p className="subheading">Plan your day, focus on what matters, and keep moving.</p>
        </div>
        <div className="date-chip">✦ TaskFlow dashboard</div>
      </section>

      <StatsPanel total={tasks.length} completed={completedCount} pending={tasks.length - completedCount} />

      <section className="workspace">
        <div className="panel form-panel">
          <div className="panel-heading">
            <div><p className="eyebrow">GET STARTED</p><h2>Add a task</h2></div>
            <span className="heading-icon">＋</span>
          </div>
          <TaskForm onAdd={addTask} />
        </div>

        <div className="panel tasks-panel">
          <div className="panel-heading">
            <div><p className="eyebrow">YOUR WORKLOAD</p><h2>Tasks <span className="count">{visibleTasks.length}</span></h2></div>
          </div>
         <div className="filters">
  <input
    aria-label="Search tasks"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search tasks..."
  />

  <select
    aria-label="Filter by status"
    value={status}
    onChange={e => setStatus(e.target.value)}
  >
    <option>All</option>
    <option>Pending</option>
    <option>Completed</option>
  </select>

  <select
    aria-label="Filter by priority"
    value={priority}
    onChange={e => setPriority(e.target.value)}
  >
    <option>All</option>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </select>

  <button
    type="button"
    onClick={() => {
      setSearch("");
      setStatus("All");
      setPriority("All");
    }}
  >
    Clear Filters
  </button>
</div>
          {error && <div className="notice error">{error} <button onClick={loadTasks}>Retry</button></div>}
          {loading ? <p className="empty">Loading your tasks…</p> :
            <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />}
        </div>
      </section>
      <footer>Small steps add up. Keep going ✦</footer>
    </main>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <NavLink to="/" className="brand"><span className="brand-mark">T</span><span>TaskFlow</span></NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<main className="page"><section className="panel"><h1>Page not found</h1><NavLink to="/">Return to dashboard</NavLink></section></main>} />
      </Routes>
    </>
  );
}