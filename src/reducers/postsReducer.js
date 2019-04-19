const postsReducer = (state = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload
  // }
  // return state
  // Code above can be re-written using a switch statement
  switch (action.type) {
    case 'FETCH_POSTS':
      console.log('REDUCER, postsReducer, action.payload: ', action.payload)
      return action.payload
    default:
      console.log('REDUCER, postsReducer, default state: ', state)
      return state;
  }
}

export default postsReducer
