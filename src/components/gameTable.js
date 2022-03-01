import React from 'react';
import './gameTable.css';

import GAMES from '../games.json';

class GameTable extends React.Component {
    /**
     *
     * @param {*} number
     */
    addFrontZero(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }

    /**
     *
     */
    formatTime(stringDate, utc = false) {
        let date = new Date(stringDate);
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day;
        let dayNmb;
        let monthNmb;
        let yearNmb;

        let hours;
        let minutes;

        if (!utc) {
            day = days[date.getDay()];
            dayNmb = date.getDate();
            monthNmb = date.getMonth() + 1;
            yearNmb =date.getFullYear();
            hours = this.addFrontZero(date.getHours());
            minutes = this.addFrontZero(date.getMinutes());
        } else {
            day = days[date.getUTCDay()];
            dayNmb = date.getUTCDate();
            monthNmb = date.getUTCMonth() + 1;
            yearNmb = date.getUTCFullYear();
            hours = this.addFrontZero(date.getUTCHours());
            minutes = this.addFrontZero(date.getUTCMinutes());
        }

        return `${day} ${hours}:${minutes} - ${dayNmb}.${monthNmb}.${yearNmb}`;
    }

    /**
     *
     */
    renderInfo() {
        const rows = [];
        GAMES.forEach((game, index) => {
            if ((new Date(game.date).getTime() - Date.now()) > 0) {

                // Last row check
                if (index === GAMES.length - 1) {
                    rows.push(
                        <div key={index} className="gameCard">
                            <h1 className="userTime">{this.formatTime(game.date, false)}</h1>
                            <p>{this.formatTime(game.date, true)}</p>
                            <br/>
                            <p>{game.duration}</p>
                            <br/>
                            <p>{game.players}</p>
                            <br/>
                            <p>{game.description}</p>
                        </div>
                    );
                } else {
                    rows.push(
                        <div key={index} className="gameCard middleRow">
                            <h1 className="userTime">{this.formatTime(game.date, false)}</h1>
                            <p>{this.formatTime(game.date, true)}</p>
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
