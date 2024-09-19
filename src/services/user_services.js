import api from "./config/axios.config";

const endpoint = "/user";

export const getCustomers = async (adminId) => {
  const response = await api.get(`${endpoint}/customers`, {
    params: { adminId },
  });
  return response.data;
};
