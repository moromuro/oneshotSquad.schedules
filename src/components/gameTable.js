import React from 'react';
import './gameTable.css';

import GAMES from '../games.json';

class GameTable extends React.Component {

    renderInfo() {
        const rows = [];
        GAMES.forEach((game, index) => {
            if ((new Date(game.date).getTime() - Date.now()) > 0) {

                // LAst row check
                if (index === GAMES.length - 1) {
                    rows.push(
                        <div key={index} className="gameCard">
                            <h1 className="userTime">{new Date(game.date).toLocaleString('en-gb', { dateStyle: 'medium', timeStyle: 'medium'})}</h1>
                            <p>{new Date(game.date).toUTCString()}</p>
                            <br/>
                            <p>{game.players}</p>
                            <br/>
                            <p>{game.description}</p>
                        </div>
                    );
                } else {
                    rows.push(
                        <div key={index} className="gameCard middleRow">
                            <h1 className="userTime">{new Date(game.date).toLocaleString('en-gb', { dateStyle: 'medium', timeStyle: 'medium'})}</h1>
                            <p>{new Date(game.date).toUTCString()}</p>
                            <br/>
                            <p>{game.players}</p>
                            <br/>
                            <p>{game.description}</p>
                        </div>
                    );
                }
                
            }
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
