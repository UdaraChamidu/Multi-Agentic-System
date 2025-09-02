import React from "react";
import AgentStatus from "../components/AgentStatus";

const Dashboard = () => {
  return (
    <div>
      <div className="header">Dashboard</div>
      <AgentStatus />
      <p>Welcome to the Multi-Agent System Dashboard!</p>
    </div>
  );
};

export default Dashboard;
