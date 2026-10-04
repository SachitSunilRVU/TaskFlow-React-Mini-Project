import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <main className="page about-page">
      <section className="welcome"><div><p className="eyebrow">ABOUT THE PROJECT</p><h1>Meet <span>TaskFlow.</span></h1><p className="subheading">A simple workspace for turning plans into progress.</p></div></section>
      <section className="panel about-panel">
        <h2>Project objective</h2>
        <p>TaskFlow is a responsive task-management application built to demonstrate core React concepts and communication with an Express REST API.</p>
        <h2>Features</h2>
        <ul>
          <li>Create tasks with a title and priority.</li>
          <li>Mark tasks as completed or pending.</li>
          <li>Delete tasks.</li>
          <li>Search tasks and filter by status or priority.</li>
          <li>View total, pending, and completed task statistics.</li>
        </ul>
        <h2>Technologies used</h2>
        <div className="tech-tags"><span>React</span><span>React Router</span><span>Vite</span><span>Express.js</span><span>REST API</span><span>CSS</span></div>
        <NavLink className="primary-button inline-button" to="/">Back to dashboard</NavLink>
      </section>
    </main>
  );
}