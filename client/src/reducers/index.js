import { combineReducers } from 'redux';
import alert from './alertReducers';
import auth from './authReduces';

export default combineReducers({ alert, auth });
