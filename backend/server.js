const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let nextId = 4;
let tasks = [
  { id: 1, title: "Review React components", priority: "High", completed: false },
  { id: 2, title: "Practice useState and useEffect", priority: "Medium", completed: false },
  { id: 3, title: "Prepare project report", priority: "Low", completed: true }
];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "TaskFlow API is running" });
});

app.get("/api/tasks", (_req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const title = String(req.body.title || "").trim();
  const priority = req.body.priority;
  if (!title) return res.status(400).json({ message: "Task title is required." });
  if (!["Low", "Medium", "High"].includes(priority)) {
    return res.status(400).json({ message: "Priority must be Low, Medium, or High." });
  }
  const task = { id: nextId++, title, priority, completed: false };
  tasks.unshift(task);
  res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(item => item.id === id);
  if (!task) return res.status(404).json({ message: "Task not found." });

  if (typeof req.body.completed === "boolean") task.completed = req.body.completed;
  if (typeof req.body.title === "string" && req.body.title.trim()) task.title = req.body.title.trim();
  if (["Low", "Medium", "High"].includes(req.body.priority)) task.priority = req.body.priority;
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = tasks.length;
  tasks = tasks.filter(item => item.id !== id);
  if (tasks.length === before) return res.status(404).json({ message: "Task not found." });
  res.json({ message: "Task deleted." });
});

app.listen(PORT, () => {
  console.log(`TaskFlow API running at http://localhost:${PORT}`);
});