import React, { Component } from 'react';

import { connect } from 'react-redux';
import fetchPosts from 'actions/fetchPosts';

// Components are generally responsible for fetching data they need by calling an action creator
// ^ from the 'componentDidMount' lifecycle method
// Action creators are responsible for making API requests (Redux-Thunk comes into play here)

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        PostList
      </div>
    )
  }
}

export default connect(null, {
  // fetchPosts: fetchPosts
  fetchPosts
})(PostList)
