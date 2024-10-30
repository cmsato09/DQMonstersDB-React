import apiClient from "./apiClient";

export const fetchSkillsList = async () => {
  const response = await apiClient.get('/dqm1/skills');
  return response.data;
};

export const fetchSkillDetail = async (skill_id) => {
  const response = await apiClient.get(`/dqm1/skills/${skill_id}`);
  return response.data;
};
