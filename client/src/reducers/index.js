import { combineReducers } from 'redux';
import PlayerReducers, { PlayerActions } from './player';
import CourseReducers, { CourseActions } from './course';

const rootReducer = combineReducers({
    player: PlayerReducers,
    course: CourseReducers,
});

export { PlayerActions, CourseActions };

export default rootReducer;