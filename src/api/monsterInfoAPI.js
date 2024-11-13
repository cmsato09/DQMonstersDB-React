import apiClient from "./apiClient";

export const fetchMonsterList = async () => {
  const response = await apiClient.get('/dqm1/monsters');
  return response.data;
};

export const fetchMonsterDetail = async (monster_id) => {
  const response = await apiClient.get(`/dqm1/monstersandskill/${monster_id}`);
  return response.data;
}

export const fetchBreedingInfo = async (monster_id) => {
  const response = await apiClient.get(`/dqm1/breeding/${monster_id}`);
  return response.data;
}
