import api from "./config/axios.config";

const endpoint = "/upload";

export const uploadProductImages = async (formData) => {
  const response = await api.post(`${endpoint}/product-images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteProductImageWithID = async (id) => {
  const response = await api.delete(`${endpoint}/product-images/${id}`);
  return response.data;
};
