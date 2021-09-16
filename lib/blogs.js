import axios from 'axios';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAllBlogsData = async () => {
  const response = await axios.get(apiUrl);
  const blogs = await response.data;

  return blogs;
};
