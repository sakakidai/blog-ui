import axios from './axios';

export const getSidebarData = async () => {
  const response = await axios.get('/sidebar');
  const sidebar = await response.data.sidebar;

  return sidebar;
};
