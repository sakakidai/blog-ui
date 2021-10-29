import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  validateStatus: (status) => (status >= 200 && status < 300) || status == 404,
});
