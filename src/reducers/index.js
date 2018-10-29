import { combineReducers } from 'redux';
import PlayerReducers from './player';
import CourseReducers from './course';

const rootReducer = combineReducers({
    player: PlayerReducers,
    course: CourseReducers,
});

export default rootReducer;