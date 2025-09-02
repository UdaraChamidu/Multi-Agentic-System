import React, { useEffect, useState } from "react";
import { getAgentStatus } from "../services/api";

const AgentStatus = () => {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    getAgentStatus().then((res) => setStatus(res.status));
  }, []);

  return <div className="header">Agent Status: {status}</div>;
};

export default AgentStatus;
