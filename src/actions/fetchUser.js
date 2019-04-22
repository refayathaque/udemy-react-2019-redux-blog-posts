import _ from 'lodash';
import jsonPlaceholder from 'apis/jsonPlaceholder';

// Memoized Action Creator
// const fetchUser = (id) => {
//   console.log('ACTION CREATOR, fetchUser')
//   return (dispatch) => {
//     _fetchUser(id, dispatch)
//     // Since we memoized '_fetchUser` (private function that makes a async API call and subsequently dispatches an action) it will only be invoked whenever the arguments passed in are different from the previous invocation. The argument that changes here is the `id` of the user, and since there are only 10 distinct users in the typicode API, there will only be 10 invocations of `_fetchUser`, i.e., only 10 API calls and 10 actions dispatched
//     // But the parent function `fetchUser` will get invoked 100 times because it has not been memoized (UserDetail component invokes this action creator, and the component is rendered 100 times since the typicode API for 'posts' has a 100 objects)
//   }
// }

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  console.log('ACTION CREATOR, _fetchUser, response.data: ', response.data)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
})

// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
// https://lodash.com/docs/#memoize

// Action Creator without memoization
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
