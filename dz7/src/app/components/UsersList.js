import React from 'react';
import {connect} from 'react-redux';

import User from './User';

import fetchUsers from '../actions/usersActions';

class UsersList extends React.Component {
       
  componentDidMount() {
    this.props.dispatch(fetchUsers())  
  }

  render() {
    if(!this.props.users.length) {
      return null;
    }

    const users = this.props.users.map((user, index) => {
      return <User key={index} {...user} />
    })

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
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

export default connect(mapStateToProps)(UsersList);
