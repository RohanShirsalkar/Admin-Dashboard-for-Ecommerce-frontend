import api from "./config/axios.config";

const endpoint = "/order";

export const createOrder = async (data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};
