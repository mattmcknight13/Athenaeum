import api from "./api-config";

export const getAllGenres = async () => {
  const res = await api.get("/genres");
  return res.data;
};
