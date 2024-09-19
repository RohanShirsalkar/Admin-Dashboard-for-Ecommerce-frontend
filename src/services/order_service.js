import api from "./config/axios.config";

const endpoint = "/order";

export const createOrder = async (data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

export const getUserOrders = async (userId, status) => {
  const response = await api.get(endpoint, {
    params: { userId: userId, status: status },
  });
  return response.data;
};
