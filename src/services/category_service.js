import api from "./config/axios.config";

const endpoint = "/category";

export const getAllCategories = async () => {
  const response = await api.get(endpoint);
  return response.data;
};
