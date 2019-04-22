import React, { Component } from 'react';

import { connect } from 'react-redux';
import fetchPostsAndUsers from 'actions/fetchPostsAndUsers';
import UserHeader from 'components/UserHeader';

// Components are generally responsible for fetching data they need by calling an action creator
// ^ from the 'componentDidMount' lifecycle method
// Action creators are responsible for making API requests (Redux-Thunk comes into play here)

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>
                {post.title}
              </h2>
              <p>
                {post.body}
              </p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('COMPONENT, PostList, mapStateToProps, state: ', state)
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  // fetchPostsAndUsers: fetchPostsAndUsers
  fetchPostsAndUsers
})(PostList)
