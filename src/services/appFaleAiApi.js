import api from './api';

export async function getAppFaleAi() {
  const response = await api.get('/health');
  return response.data;
}
//
