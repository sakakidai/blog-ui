import axios from '../lib/axios';
import useSWR from 'swr';

const apiUrl = process.env.NEXT_PUBLIC_API_SERVER;

export const useBlogs = (asPath) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`${apiUrl}/${asPath}`, fetcher);

  return { data: data, error };
};
