# TaskFlow — React Mini Project (CS3301)

A beginner-friendly full-stack task manager built with React (Vite), React Router, and Express.

## Requirements
- Node.js 20+ and npm
- VS Code (recommended)

## Run the project

### 1. Start the backend
Open a terminal in this folder:
```bash
cd backend
npm install
npm start
```
Keep this terminal open. The API runs at http://localhost:5000.

### 2. Start the frontend
Open a **second** terminal in the project folder:
```bash
cd frontend
npm install
npm run dev
```
Open the URL Vite prints, usually http://localhost:5173.

## Features
- Add, complete, and delete tasks
- Priority selection and priority filtering (**modification 1**)
- Live task statistics (**modification 2**)
- Search and status filters
- Dashboard and About pages using React Router
- Responsive layout
- Express REST API

## Important note about data
Tasks are stored in server memory. They remain while the backend process is running, but reset if you stop/restart the backend. This keeps setup simple for the assignment; a database can be added later.

## API endpoints
- `GET /api/tasks` — list tasks
- `POST /api/tasks` — create task
- `PATCH /api/tasks/:id` — update task / completion status
- `DELETE /api/tasks/:id` — delete task
- `GET /api/health` — API health check

## Suggested tutorial to cite in the report
Shaif Arfan, “MERN stack project for beginners” / task management app tutorial:
https://youtu.be/7s7RHc_8SaU

Use the tutorial as the learning reference, but clearly describe the implementation you actually built and the changes you made. Do not claim that you followed steps you did not follow.

## Key Features

- Add, complete, and delete tasks
- Search tasks
- Filter tasks by status and priority
- View task statistics
- Responsive user interface
- React Router navigation
- Express.js REST API

## Project Structure

- `frontend/` - React frontend application
- `backend/` - Express.js backend and API

## How to Run

### Backend

```bash
cd backend
npm install
node server.js