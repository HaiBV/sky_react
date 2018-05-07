import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import { Grid } from 'react-bootstrap';
import Header from 'components/Header';
import AddPlayer from 'components/AddPlayer';
import Player from 'containers/Player/Player';
import playerService from 'services/player.service';
import './scoreboard.css';

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: playerService.getPlayers()
        };
    }

    onScoreChange(index, delta) {
        this.setState(update(this.state, {
            players: {
                $apply: function (_players) {
                    _players[index].score += delta;
                    return _players;
                }
            }
        }));
    }

    handleAddPlayer(name) {
        this.setState(update(this.state, {
            players: {
                $push: [{
                    name: name,
                    score: 0,
                    id: this.state.players.length + 1,
                }],
            }
        }));
    }

    handleRemovePlayer(index) {
        this.setState(update(this.state, {
            players: {
                $splice: [[index, 1]],
            }
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Grid>
                    <Header title={this.props.title} players={this.state.players}/>
                    <div className="players">
                        {this.state.players.map(function (player, index) {
                            return (<Player key={player.id} name={player.name} score={player.score}
                                            onScoreChange={function (delta) {
                                                this.onScoreChange(index, delta)
                                            }.bind(this)}
                                            handleRemove={function () {
                                                this.handleRemovePlayer(index);
                                            }.bind(this)}/>);
                        }.bind(this))}
                    </div>
                    <div className="add-player">
                        <AddPlayer onAdd={this.handleAddPlayer.bind(this)}/>
                    </div>
                </Grid>
            </div>
        );
    }
}

Scoreboard.propTypes = {
    title: PropTypes.string.isRequired,
};

Scoreboard.defaultProps = {
    title: "My Scoreboard",
};

export default Scoreboard;