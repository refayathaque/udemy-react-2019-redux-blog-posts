import { combineReducers } from 'redux';
import postsReducer from 'reducers/postsReducer';

export default combineReducers({
  // dummyReducer: () => 'Hello World'
  // ^ Tricks Redux into thinking that there are 'valid reducers', helps us to get rid of the Chrome console warning: 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.'
  posts: postsReducer
});
