import {combineReducers} from 'redux';
import UserRegistrationReducer from './UserRegistrationReducer';
const rootReducer = combineReducers({
  UserRegistrationReducer: UserRegistrationReducer
});

export default rootReducer;
