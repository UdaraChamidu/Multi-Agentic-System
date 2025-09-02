import AgentStatus from "../components/AgentStatus";
// import getAnalytics from "../pages/Analytics";
// Existing imports and functions...

const API_URL = "http://127.0.0.1:8000/api/agents";

export const getAgentStatus = async () => {
  const response = await fetch(`${API_URL}/status`);
  return response.json();
};

export const postTask = async (task) => {
  const response = await fetch(`${API_URL}/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const getAnalytics = async () => {
  const response = await fetch(`${API_URL}/analytics`);
  return response.json();
};
