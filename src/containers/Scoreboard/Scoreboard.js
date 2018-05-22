import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';

import playerService from 'services/player.service';
import * as PlayerActionCreators from 'actions/player';

import Header from 'components/Header';
import AddPlayer from 'components/AddPlayer';
import Player from 'containers/Player/Player';
import PlayerDetail from 'containers/Player/PlayerDetail';

import './scoreboard.css';

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: playerService.getPlayers()
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        players: PropTypes.array.isRequired,
    };

    static defaultProps = {
        title: "My Scoreboard",
    };

    render() {
        const { dispatch, players, selectedPlayerIndex } = this.props;

        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        return (
            <div className="scoreboard">
                <Grid fluid={true}>
                    <Header title={this.props.title} players={players}/>
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
                    {selectedPlayerIndex > -1 ? <PlayerDetail player={players[selectedPlayerIndex]}/> : "Please select a player"}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        players: state.players,
        selectedPlayerIndex: state.selectedPlayerIndex,
    }
);

export default connect(mapStateToProps)(Scoreboard);