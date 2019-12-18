import { combineReducers } from 'redux';
import { CoursesList } from './CoursesList';
import { Screens } from './Screens';

const rootReducer = combineReducers({
  CoursesList,
  Screens,
});

export default rootReducer;
