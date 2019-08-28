import { combineReducers } from 'redux';
import alert from './alertReducers';
import auth from './authReduces';
import profile from './profileReducers';
import post from './postReducers';

export default combineReducers({ alert, auth, profile, post });
