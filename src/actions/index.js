import { jsonPlaceholder } from 'apis';

export const fetchPosts = async () => {
  console.log('ACTION CREATOR, fetchPosts')
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};

// Async actions with Redux-Thunk
// With Redux-Thunk we can return a function with our action creators (instead of only a plain action object), and when we do this, the function will be invoked with the 'dispatch' and 'getState' functions from Redux as arguments
// With these ^ two Redux functions we have the ability to control the Redux store in any way we want (e.g., can STOP/MODIFY actions)
// This allows us to wait until the API request is complete, and once the request is complete, we can dispatch the action manually
// Redux-Thunk, by virtue of being a middleware, works at the layer between Redux 'dispatch' and 'reducers'
// All 'actions' dispatched will go through Redux-Thunk, and it will determine if the action is a function or a plain action object
// If Redux-Thunk gets a plain action object, it will forward it to the reducers (just how Redux does things)
// If Redux-Thunk gets a function it will run the function, this function will make the API request, and then DISPATCH THE ACTION MANUALLY once the API request is complete
// ^ This blocks the normal Redux flow of action -> reducer, and only resumes the flow once the API request is complete
