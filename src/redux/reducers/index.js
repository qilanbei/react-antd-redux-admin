import { combineReducers } from 'redux';
import userInfo from './userInfo';
import tagList from './tagList';
import { breadCrumb, tags, collapse } from './setting';
export default combineReducers({ userInfo, tagList, breadCrumb, tags, collapse });
