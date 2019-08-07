import { combineReducers } from 'redux';
import alert from './alertReducers';
import auth from './authReduces';
import profile from './profileReducers';

export default combineReducers({ alert, auth, profile });
