import axios from 'axios';

export const jsonPlaceholder = () => {
  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
}

// https://github.com/refayathaque/udemy-react-2019-redux-songs/blob/master/src/actions/index.js
//https://github.com/refayathaque/udemy-react-2019-redux-songs/blob/master/src/components/App.js
// ^ Named exports vs default exports
