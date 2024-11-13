import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dqmonstersdb-api-743047725852.us-central1.run.app/',
  timeout: 20000,
});

export default apiClient