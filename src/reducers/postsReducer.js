const postsReducer = (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    console.log('REDUCER, postsReducer, action.payload: ', action.payload)
    return [...state, action.payload]
  }
  console.log(state)
  return state
}

export default postsReducer
