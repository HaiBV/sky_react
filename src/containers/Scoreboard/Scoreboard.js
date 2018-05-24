import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';

import PlayerActionCreators from 'actions/player';

import Header from 'components/Header';
import AddPlayer from 'components/AddPlayer';
import Player from 'containers/Player/Player';
import PlayerDetail from 'containers/Player/PlayerDetail';

import './scoreboard.css';

class Scoreboard extends Component {
    static propTypes = {
        players: PropTypes.array.isRequired,
    };

    render() {
        const {
            players,
            selectedPlayerIndex,
            addPlayer,
            removePlayer,
            selectPlayer,
            updatePlayerScore
        } = this.props;

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
                    {selectedPlayerIndex > -1 ?
                        <PlayerDetail player={players[selectedPlayerIndex]}/> : "Please select a player"}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        selectedPlayerIndex: state.selectedPlayerIndex,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(PlayerActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);