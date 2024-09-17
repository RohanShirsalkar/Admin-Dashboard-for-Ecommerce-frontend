import api from "./config/axios.config";
// /recent-sale
const endpoint = "/dashboard";

export const getQuickOverviewData = async () => {
  const response = await api.get(`${endpoint}/quick-overview`);
  return response.data;
};

export const getRecentSales = async () => {
  const response = await api.get(`${endpoint}/recent-sales`);
  return response.data;
};
