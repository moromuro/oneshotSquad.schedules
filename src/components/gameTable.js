import React from 'react';
import './gameTable.css';

import GAMES from '../games.json';

class GameTable extends React.Component {

    renderInfo() {
        const rows = [];
        GAMES.forEach((game, index) => {
            rows.push(
                <div key={index} className="gameCard">
                    <h2 className="userTime">{new Date(game.date).toLocaleString('en-gb', { dateStyle: 'medium', timeStyle: 'medium'})}</h2>
                    <p>{game.date.toString('en-gb', { dateStyle: 'medium', timeStyle: 'medium'})}</p>
                    <p>{game.players}</p>
                    <p>{game.description}</p>
                </div>
            );
        })
        
        return rows;
    }

    render() {
        return (
            <div className="gameTable">
                {this.renderInfo()}
            </div>
        )
    }
}

export default GameTable;
