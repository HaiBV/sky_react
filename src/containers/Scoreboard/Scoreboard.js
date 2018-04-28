import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import Header from 'components/Header';
import Player from 'containers/Player/Player';
import playerService from 'services/player.service';
import './scoreboard.css';

class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <Grid>
                    <Header title={this.props.title}/>
                    <div className="players">
                        {playerService.getPlayers().map(function (player) {
                            return <Player name={player.name} score={player.score}/>
                        })}
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