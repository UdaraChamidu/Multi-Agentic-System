import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Multi-Agent System</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
