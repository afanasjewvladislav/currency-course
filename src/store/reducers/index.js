import { combineReducers } from 'redux';
import { CoursesList } from './CoursesList';

const rootReducer = combineReducers({
  CoursesList: CoursesList,
});

export default rootReducer;
