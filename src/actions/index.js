import { jsonPlaceholder } from 'apis';

export const fetchPosts = async () => {
  console.log('ACTION CREATOR, fetchPosts')
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};
