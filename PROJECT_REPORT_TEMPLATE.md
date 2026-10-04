# CS3301 — Full Stack Development
## CIE-2 Assignment: React Mini Project Development

**Project Title:** TaskFlow — Task Management Application  
**Student Name:** [Your name]  
**USN:** [Your USN]  
**Course:** CS3301 — Full Stack Development

> Replace all bracketed prompts. Add screenshots from your own running application. Do not submit this template unchanged.

## 1. Title
TaskFlow — Task Management Application using React and Express.js.

## 2. Problem Statement
Students and individuals often need a simple way to record tasks, identify priorities, track completion, and review their workload. TaskFlow provides a single interface to create, search, filter, complete, and delete tasks.

## 3. Project Objective
The objective is to develop a responsive full-stack React application and demonstrate reusable components, props, state management, effects, event and form handling, client-side routing, and communication with an Express API.

## 4. Technologies Used
- React and Vite
- JavaScript
- React Router
- React Hooks: useState, useEffect, useMemo, useCallback
- Express.js and Node.js
- REST API and Fetch API
- HTML and responsive CSS
- VS Code and npm

## 5. Selected YouTube Tutorial
**Tutorial:** Shaif Arfan — MERN stack project for beginners / task management app  
**Link:** https://youtu.be/7s7RHc_8SaU

Briefly describe the sections you actually watched and learned from. The submitted implementation is a simplified React + Express version; explain any differences from the tutorial honestly.

## 6. System / Component Structure
- `App.jsx`: routing, dashboard state, API requests, filters
- `TaskForm.jsx`: controlled form, validation, submit event
- `TaskList.jsx`: reusable task list and task actions
- `StatsPanel.jsx`: class component showing task statistics
- `About.jsx`: About page
- `backend/server.js`: Express API and in-memory task data
- `styles.css`: responsive presentation

Architecture: User → React components → Fetch API → Express REST endpoints → in-memory task array.

## 7. Important React Concepts Implemented
- Components: TaskForm, TaskList, StatsPanel, About
- Class component: StatsPanel extends React Component
- Functional components: App, TaskForm, TaskList, About
- Parent-child communication: App passes tasks and callback functions through props
- Props: onAdd, tasks, onToggle, onDelete, and statistics
- useState: form fields, task data, search and filter controls
- useEffect: fetch initial tasks when the dashboard loads
- Event handling: onChange, onClick, onSubmit
- Form handling: controlled task title and priority fields with validation
- Client-side routing: Dashboard (`/`) and About (`/about`)
- Backend: Express GET, POST, PATCH and DELETE endpoints
- Responsive UI: CSS media queries for smaller screens

## 8. Screenshots
Insert your own screenshots with captions:
1. Dashboard and task statistics — [insert screenshot]
2. Adding a task using the form — [insert screenshot]
3. Task list showing priority labels — [insert screenshot]
4. Priority filter and search — [insert screenshot]
5. About page / React Router navigation — [insert screenshot]
6. Backend running in the terminal — [insert screenshot]

## 9. Modifications Made
1. **Priority filtering:** Added Low, Medium, and High priorities and a filter that narrows the visible task list.
2. **Task statistics:** Added total, pending, and completed counts, plus a completion percentage.
Additional improvements include text search, status filtering, a responsive layout, and a separate About page.

## 10. Challenges Faced
Replace with challenges you personally encountered. Possible examples, only if true:
- Connecting the React frontend to the Express API.
- Handling loading and network-error states.
- Keeping the displayed statistics in sync with task updates.
- Making the layout usable on mobile screens.

## 11. Conclusion
TaskFlow demonstrates the development of a component-based React interface connected to an Express REST API. It implements task creation, completion, deletion, filtering, search, routing, and a responsive layout. The project provided practical experience with React state, effects, props, forms, events, and frontend-backend communication.

## 12. GitHub Link
[Paste your GitHub repository URL after uploading your project.]

## 13. YouTube Tutorial Link
https://youtu.be/7s7RHc_8SaU
