const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      console.log('REDUCER, usersReducer, action.payload: ', action.payload)
      return [...state, action.payload]
    default:
      console.log('REDUCER, usersReducer, default state: ', state)
      return state;
  }
}

export default usersReducer
