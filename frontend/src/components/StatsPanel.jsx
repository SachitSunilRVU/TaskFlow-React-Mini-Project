import { Component } from "react";

export default class StatsPanel extends Component {
  render() {
    const { total, completed, pending } = this.props;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return (
      <section className="stats-grid" aria-label="Task statistics">
        <div className="stat-card"><div className="stat-top"><span>Total tasks</span><span className="stat-icon purple">▤</span></div><strong>{total}</strong><div className="stat-foot">All your tasks</div></div>
        <div className="stat-card"><div className="stat-top"><span>Pending</span><span className="stat-icon orange">◷</span></div><strong>{pending}</strong><div className="stat-foot">Still in progress</div></div>
        <div className="stat-card"><div className="stat-top"><span>Completed</span><span className="stat-icon green">✓</span></div><strong>{completed}</strong><div className="progress-track"><span style={{ width: `${percent}%` }} /></div><div className="stat-foot">{percent}% completion rate</div></div>
      </section>
    );
  }
}