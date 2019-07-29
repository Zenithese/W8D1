import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import { usersReducer } from './users_reducer'
import sessionReducer from './session_reducer'
import { sessionErrorsReducer } from './session_errors_reducer'
import errorsReducer from './errors_reducer'

export const rootReducer = combineReducers({
    entities: entitiesReducer,
    users: usersReducer,
    session: sessionReducer,
    session_errors: sessionErrorsReducer,
    errors: errorsReducer,
  })