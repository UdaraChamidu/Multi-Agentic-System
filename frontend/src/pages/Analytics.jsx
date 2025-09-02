import React, { useEffect, useState } from "react";
import { getAnalytics } from "../services/api";

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    total_tasks: 0,
    last_task: null,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    const data = await getAnalytics();
    setAnalytics(data);
  };

  return (
    <div>
      <div className="header">Analytics</div>
      <p><b>Total Tasks Executed:</b> {analytics.total_tasks}</p>
      <div>
        <b>Last Task:</b>
        {analytics.last_task ? (
          <pre>{JSON.stringify(analytics.last_task, null, 2)}</pre>
        ) : (
          <p>No tasks executed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
