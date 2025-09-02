// Existing imports and functions...

export const getAnalytics = async () => {
  const response = await fetch(`${API_URL}/analytics`);
  return response.json();
};
