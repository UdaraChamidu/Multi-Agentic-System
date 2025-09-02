import React from "react";
import AgentStatus from "../components/AgentStatus";
import ChatBox from "../components/ChatBox";

const Dashboard = () => {
  return (
    <div className="container">
      <AgentStatus />
      <h2>Multi-Agent Chat</h2>
      <ChatBox />
    </div>
  );
};

export default Dashboard;
