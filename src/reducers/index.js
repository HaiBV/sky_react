import { combineReducers } from 'redux';
import PlayerReducers from './player';

const rootReducer = combineReducers({
    player: PlayerReducers,
});

export default rootReducer;