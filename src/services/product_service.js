import api from "./config/axios.config";

const endpoint = "/product";

export const getAllProducts = async (take, skip, status) => {
  const response = await api.get(endpoint, {
    params: { take, skip, status },
  });
  return response.data;
};

export const getProductWithId = async (id) => {
  const response = await api.get(`${endpoint}/${id}`);
  return response.data;
};

export const createNewProduct = async (data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

export const updateProductWithID = async (id, data) => {
  const response = await api.put(`${endpoint}/${id}`, data);
  return response.data;
};
