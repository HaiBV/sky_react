import * as PlayerActinTypes from 'actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActinTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = index => {
    return {
        type: PlayerActinTypes.REMOVE_PLAYER,
        index
    }
};

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActinTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
};