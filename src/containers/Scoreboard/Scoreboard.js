import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Grid} from 'react-bootstrap';

import {PlayerActionCreators} from 'actions';

import Header from 'components/Header';
import AddPlayer from 'components/Player/AddPlayer';
import Player from 'components/Player/Player';
import PlayerDetail from 'components/Player/PlayerDetail';

import './scoreboard.css';

const Scoreboard = (props) => {
    const {
        players,
        selectedPlayerIndex,
        addPlayer,
        removePlayer,
        selectPlayer,
        updatePlayerScore
    } = props;

    return (
        <div className="scoreboard">
            <Grid fluid>
                <Header title={props.title} players={players}/>
                <div className="players">
                    {players.map((player, index) => (
                        <Player
                            index={index}
                            name={player.name}
                            score={player.score}
                            key={player.name}
                            updatePlayerScore={updatePlayerScore}
                            selectPlayer={selectPlayer}
                            removePlayer={removePlayer}
                        />
                    ))}
                </div>
                <div className="add-player">
                    <AddPlayer addPlayer={addPlayer}/>
                </div>
                {selectedPlayerIndex > -1 ?
                    <PlayerDetail player={players[selectedPlayerIndex]}/> : "Please select a player"}
            </Grid>
        </div>
    );
};

Scoreboard.propTypes = {
    title: PropTypes.string,
    players: PropTypes.array.isRequired,
    selectedPlayerIndex: PropTypes.number,
    addPlayer: PropTypes.func,
    removePlayer: PropTypes.func,
    selectPlayer: PropTypes.func,
    updatePlayerScore: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        players: state.player.players,
        selectedPlayerIndex: state.player.selectedPlayerIndex,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(PlayerActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);