import * as PlayerActionTypes from 'actiontypes/player';

export default {
    addPlayer: name => {
        return {
            type: PlayerActionTypes.ADD_PLAYER,
            name
        };
    },
    removePlayer: index => {
        return {
            type: PlayerActionTypes.REMOVE_PLAYER,
            index
        }
    },
    selectPlayer: index => {
        return {
            type: PlayerActionTypes.SELECT_PLAYER,
            index
        }
    },
    updatePlayerScore: (index, score) => {
        return {
            type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
            index,
            score

        };
    },
};