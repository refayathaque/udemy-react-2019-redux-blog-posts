import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUser from 'actions/fetchUser';

class UserHeader extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    const { user } = this.props

    if (!user) {
      return null;
    }

    return (
      <div>
        {user.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('COMPONENT, UserHeader, mapStateToProps, state: ', state)
  return {
    user: state.users.find((user) => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps, {
  // fetchUser: fetchUser
  fetchUser
})(UserHeader);
