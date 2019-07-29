import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {  
    errors: ownProps.errors.session,
    formType: 'login'
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

export default connect(msp, mdp)(SessionForm) 