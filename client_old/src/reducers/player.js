/**
 * Action types
 * */
const ADD_PLAYER = 'player/ADD_PLAYER';
const REMOVE_PLAYER = 'player/REMOVE_PLAYER';
const UPDATE_PLAYER_SCORE = 'player/UPDATE_PLAYER_SCORE';
const SELECT_PLAYER = 'player/SELECT_PLAYER';

/**
 * Initial state
 * */
const initialState = {
  players: [
    {
      id: 1,
      name: 'Captain America',
      score: 42,
      created: '5/1/2018',
      updated: '5/14/2018'
    },
    {
      id: 2,
      name: 'Iron man',
      score: 36,
      created: '4/1/2018',
      updated: '4/14/2018'
    },
    {
      id: 3,
      name: 'Spidey',
      score: 17,
      created: '3/1/2018',
      updated: '3/14/2018'
    },
    {
      id: 4,
      name: 'Captain Marvel',
      score: 28,
      created: '2/1/2018',
      updated: '2/14/2018'
    },
    {
      id: 5,
      name: 'Hulk',
      score: 29,
      created: '1/1/2018',
      updated: '1/14/2018'
    }
  ],
  selectedPlayerIndex: -1
};

/**
 * Actions
 * */
export const PlayerActions = {
  addPlayer: name => {
    return {
      type: ADD_PLAYER,
      name
    };
  },
  removePlayer: index => {
    return {
      type: REMOVE_PLAYER,
      index
    };
  },
  selectPlayer: index => {
    return {
      type: SELECT_PLAYER,
      index
    };
  },
  updatePlayerScore: (index, score) => {
    return {
      type: UPDATE_PLAYER_SCORE,
      index,
      score
    };
  }
};

/**
 * Reduces
 * */
export default function Player(state = initialState, action) {
  let now = new Date();
  let date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 10,
            created: date,
            updated: ''
          }
        ]
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: [
          ...state.players.slice(0, action.index),
          ...state.players.slice(action.index + 1)
        ]
      };
    case UPDATE_PLAYER_SCORE:
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index === action.index) {
            return {
              ...player,
              score: player.score + action.score,
              updated: date
            };
          }
          return player;
        })
      };
    case SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index
      };
    default:
      return state;
  }
}
