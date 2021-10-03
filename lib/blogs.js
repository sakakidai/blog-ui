import axios from './axios';

export const getAllBlogsData = async () => {
  const response = await axios.get('/blogs');
  const data = await response.data;
  const blogs = data.blogs;
  const idols = data.idols;
  const genreList = data.genreList;
  const distributorList = data.distributorList;

  return [blogs, idols, genreList, distributorList];
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
  const response = await axios.get(`/blogs/${id}`);
  const blog = response.data.blog;

  return blog;
};
