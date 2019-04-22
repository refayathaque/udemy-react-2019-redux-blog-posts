import fetchPosts from 'actions/fetchPosts';
import fetchUser from 'actions/fetchUser';
import _ from 'lodash';

const fetchPostsAndUsers = () => {
  console.log('ACTION CREATOR, fetchPostsAndUsers')
  return async (dispatch, getState) => {
    // getState argument from Redux-Thunk gives us access to the Redux store
    await dispatch(fetchPosts())
    // We need to make sure that when we call the action creator `fetchPosts` whatever action/function it returns gets dispatched as well, that way we are ensuring that the returned action/function from `fetchPosts` goes through our Redux/Middlewares pipeline before going into the reducers
    // We are MANUALLY DISPATCHING the results of calling the action creator `fetchPosts`, which in this case is the inner function inside `fetchPosts` that actually makes the API call
    // Whenver we call an action creator from INSIDE of ANOTHER action creator, we need to make sure that we DISPATCH the result of calling the action creator
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    console.log(userIds)
    // forEach() vs. map() - https://codeburst.io/javascript-map-vs-foreach-f38111822c0f - forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array.
    userIds.forEach(id => dispatch(fetchUser(id)))
    // Don't need `await` keyword when dispatching `fetchUser` action creator, because we do not have anything else to do in this code block after we fetch the user data. I.e., we do not have anything that is dependent on the results of `fetchUser`, unlike with `fetchPosts` where we needed that action creator to succesfully complete in order to create our array of `userIds`
  }
}

export default fetchPostsAndUsers
