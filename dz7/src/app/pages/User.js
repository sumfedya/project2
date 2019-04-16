import React from 'react';
import {connect} from 'react-redux';

import UserProfile from '../components/User';

import fetchUser from '../actions/userActions';

class User extends React.Component {
  render() {
    return (
      <div>
        {this.props.user && <UserProfile {...this.props.user} />}
      </div>
    );
  }
}

function mapStateToProps(state) { 
    return {
    users: state.users.users,
    usersFetched: state.users.fetched
  };
}

export default connect(mapStateToProps)(User);
