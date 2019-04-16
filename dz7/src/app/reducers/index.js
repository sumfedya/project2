import { combineReducers } from 'redux';

import usersDataList from './usersReducer';
import userData from './userReducer';

export default combineReducers({
    users: usersDataList,
    user: userData
})