import api from "./api-config";

export const getAllBooks = async () => {
  const res = await api.get("/books");
  return res.data;
};

export const getOneBook = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

export const postBook = async (bookData) => {
  const res = await api.post("/books", { book: bookData });
  return res.data;
};

export const putBook = async (id, bookData) => {
  const res = await api.put(`/books/${id}`, { book: bookData });
  return res.data;
};

export const destroyBook = async (id) => {
  const res = await api.delete(`/books/${id}`);
  return res;
};

export const addGenre = async (genreId, genreId) => {
  const res = await api.put(`/genres/${genreId}/books/${genreId}`);
  return res.data;
};
