import axios from 'axios';
const apiUrl = 'http://localhost:3001/api/v1/blogs';

export const getAllBlogsData = async () => {
  const response = await axios.get(apiUrl);
  const blogs = await response.data;

  return blogs;
};
