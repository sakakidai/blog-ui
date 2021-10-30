import axios from './axios';

export const getAllIdolIds = async () => {
  const response = await axios.get('/idols');
  const idols = response.data;

  return idols.map((idol) => {
    return {
      params: { id: String(idol.id) },
    };
  });
};

export const getIdolData = async (id) => {
  const response = await axios.get(`/idols/${id}`).catch((error) => {
    return error.response;
  });

  if (response.status === 404) {
    return;
  }

  const idol = response.data;

  return idol;
};
