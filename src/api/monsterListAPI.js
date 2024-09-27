import apiClient from "./apiClient";

export const fetchMonsters = async () => {
  const response = await apiClient.get('/dqm1/monsters');
  return response.data;
};