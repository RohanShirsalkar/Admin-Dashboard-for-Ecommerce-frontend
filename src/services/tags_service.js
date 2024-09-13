import api from "./config/axios.config";

const endpoint = "/tag";

export const getAllTags = async () => {
  const response = await api.get(endpoint);
  return response.data;
};
