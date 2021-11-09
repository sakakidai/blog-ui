import axios from './axios';

export const getAllBlogsData = async () => {
  const response = await axios.get('/blogs');
  const data = await response.data;

  return data;
};

export const getAllBlogIds = async () => {
  const response = await axios.get('/blogs');
  const blogs = response.data.blogs;

  return blogs.map((blog) => {
    return {
      params: { id: String(blog.id) },
    };
  });
};

export const getBlogData = async (id) => {
  const response = await axios.get(`/blogs/${id}`).catch((error) => {
    return error.response;
  });

  if (response.status === 404) {
    return;
  }

  const blog = response.data;

  return blog;
};

export const getSidebarData = async () => {
  const response = await axios.get('/sidebar');
  const sidebar = await response.data.sidebar;

  return sidebar;
};
