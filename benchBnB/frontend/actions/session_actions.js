import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};




export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(user => {
        return dispatch(dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error)))
      })
  }
}

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => dispatch(logoutCurrentUser(user)))
} 

export const signup = (user) => {
  debugger
  return dispatch => {
    return APIUtil.signup(user).then(user => dispatch(signup(user)), error => dispatch(receiveErrors(error)))
  } 
}