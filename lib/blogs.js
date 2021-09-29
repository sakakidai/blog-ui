import axios from './axios';

export const getAllBlogsData = async () => {
  const response = await axios.get('/blogs');
  const blogs = await response.data;

  return blogs;
};

export const getAllBlogIds = async () => {
  const response = await axios.get('/blogs');
  const blogs = response.data;

  return blogs.map((blog) => {
    return {
      params: { id: String(blog.id) },
    };
  });
};

export const getBlogData = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  const blog = response.data;

  return blog;
};
