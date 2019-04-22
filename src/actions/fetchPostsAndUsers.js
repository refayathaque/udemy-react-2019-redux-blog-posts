import fetchPosts from 'actions/fetchPosts';
import fetchUser from 'actions/fetchUser';

const fetchPostsAndUsers = () => {
  console.log('ACTION CREATOR, fetchPostsAndUsers')
  return async (dispatch) => {
    await dispatch(fetchPosts())
  }
}

export default fetchPostsAndUsers
