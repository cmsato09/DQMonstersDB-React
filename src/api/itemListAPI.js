import apiClient from "./apiClient";

export const fetchItemsList = async () => {
  const response = await apiClient.get('/dqm1/items');
  return response.data;
};