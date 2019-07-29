import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup'
  }
}

const mdp = (dispatch) => {
  return {
    processForm: (user) => { 
      debugger
      return dispatch(signup(user)) 
    }
  }
}

export default connect(msp, mdp)(SessionForm) 