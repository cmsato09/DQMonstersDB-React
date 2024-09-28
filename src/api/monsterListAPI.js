import apiClient from "./apiClient";

export const fetchMonsters = async () => {
  const response = await apiClient.get('/dqm1/monsters');
  return response.data;
};

export const fetchMonster = async (monster_id) => {
  const response = await apiClient.get(`/dqm1/monstersandskill/${monster_id}`);
  return response.data
}
