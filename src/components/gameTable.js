import React from 'react';
import './gameTable.css';

import { FormatTime } from '../services/helpers';
import GAMES from '../games.json';

class GameTable extends React.Component {
    /**
     *
     */
    renderInfo() {
        const rows = [];
        GAMES.forEach((game, index) => {
            if ((new Date(game.date).getTime() - Date.now()) > 0) {

                // Last row check
                if (index === GAMES.length - 1) {
                    const userTime = FormatTime(game.date, game.duration, false);
                    const UTCTime = FormatTime(game.date, game.duration, true);

                    rows.push(
                        <div key={index} className="gameCard">
                            <h1 className="userTime">{userTime.mainText}</h1>
                            <h2>{userTime.secondText}</h2>
                            <p>{UTCTime.mainText} {UTCTime.secondText}</p>
                            <br/>
                            <p>{game.duration}</p>
                            <br/>
                            <p>{game.players}</p>
                            <br/>
                            <p>{game.description}</p>
                        </div>
                    );
                } else {
                    const userTime = FormatTime(game.date, game.duration, false);
                    const UTCTime = FormatTime(game.date, game.duration, true);

                    rows.push(
                        <div key={index} className="gameCard middleRow">
                            <h1 className="userTime">{userTime.mainText}</h1>
                            <h2>{userTime.secondText}</h2>
                            <p>{UTCTime.mainText} {UTCTime.secondText}</p>
                            <br/>
                            <p>{game.duration}</p>
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
