import { PlayerActionTypes } from 'actiontypes';

const initialState = {
    players: [
        {
            id: 1,
            name: "Captain America",
            score: 42,
            created: '5/1/2018',
            updated: '5/14/2018',
        },
        {
            id: 2,
            name: "Iron man",
            score: 36,
            created: '4/1/2018',
            updated: '4/14/2018',
        },
        {
            id: 3,
            name: "Spidey",
            score: 17,
            created: '3/1/2018',
            updated: '3/14/2018',
        },
        {
            id: 4,
            name: "Captain Marvel",
            score: 28,
            created: '2/1/2018',
            updated: '2/14/2018',
        },
        {
            id: 5,
            name: "Hulk",
            score: 29,
            created: '1/1/2018',
            updated: '1/14/2018',
        }
    ],
    selectedPlayerIndex: -1,
};

export default function Player(state = initialState, action) {
    let now = new Date();
    let date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players,
                    {
                        name: action.name,
                        score: 0,
                        created: date,
                        updated: '',
                    }
                ],
            };
        case PlayerActionTypes.REMOVE_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players.slice(0, action.index),
                    ...state.players.slice(action.index + 1),
                ],
            };
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return {
                ...state,
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            score: player.score + action.score,
                            updated: date,
                        }
                    }
                    return player;
                }),
            };
        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index,
            };
        default:
            return state;
    }
}
