import jsonPlaceholder from 'apis/jsonPlaceholder';

const fetchUser = (id) => {
  console.log('ACTION CREATOR, fetchUser')
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    console.log('ACTION CREATOR, fetchUser, response.data: ', response.data)
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    })
  }
}

export default fetchUser
