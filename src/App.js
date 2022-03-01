import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import GameTable from './components/gameTable';
import GAMES from './games.json';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: {
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            },
            startTime: 0,
            timer: null,
            duration: 0,
            formattedMainText: '',
            formattedUTCText: ''
        }
        this.startTimer = this.start.bind(this);
        this.nextGame = [];
    }

    /**
     *
     * @param {*} duration
     */
    msToTime(duration) {
        let milliseconds = parseInt((duration % 1000));
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor(duration / (1000 * 60 * 60));

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        milliseconds = milliseconds.toString().padStart(3, '0');
    
        return {
          hours,
          minutes,
          seconds,
          milliseconds
        };
    }

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
    start() {
        if (this.nextGame.length === 0) {
            
            let i = 0;
            let found = false;
            while (!found) {
            
                if (i === GAMES.length) {
                    break;
                }
                
                const game = GAMES[i];

                if ((new Date(game.date).getTime() - Date.now()) > 0) {
                    this.nextGame = GAMES[i];
                    found = true;
                }

                i++;
            }
        }

        if (!this.state.timer) {
            /**
             * Set the timer from the point of opening the site while staying there.
             */ 
            this.state.startTime = Date.now();
            this.state.duration = new Date(this.nextGame.date).getTime() - Date.now();
            this.timer = window.setInterval(() => this.run(), 1000);
        }

        this.formattedMainText = this.formatTime(this.nextGame.date, false);
        this.formattedUTCText = this.formatTime(this.nextGame.date, true);
    }

    /**
     *
     */
    run() {
        const diff = Date.now() - this.state.startTime;
        
        // count down
        let remaining = this.state.duration - diff;

        if (remaining < 0) {
          remaining = 0;
        }
        
        this.setState(() => ({
          time: this.msToTime(remaining)
        }));

        if (remaining === 0) {
          window.clearTimeout(this.timer);
          this.timer = null;
        }
    }

    /**
     *
     */
    render() {
        return (
            <div className="App">
                {this.startTimer()}
                <div className="description-header card">
                    <h1 id="header-headline-1"> GMT ONESHOT SQUAD</h1>
                    <p id="header-text-1">Adventures in the World of Bal'Morel,<br/>brought to you by DM Zaeryss.</p>
                    <p id="header-text-2">With possible issues regarding the site,<br/> contact Moro on discord.</p>
                </div>
                <div className="timer card">
                    <div className="bigTimerCard">
                        <div className="bigTimerLabelDiv">
                            <p id="bigTimerLabel">Next Game in</p>
                        </div>
                        <p className="bigTimer">
                            <strong>
                                {this.state.time.hours} : {this.state.time.minutes} : {this.state.time.seconds}
                            </strong>
                        </p>
                    </div>
                    <div className="timerInfo"> 
                        <p className="timerText1"><strong>{this.formattedMainText}</strong></p>
                        <span className="infoText">Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
                        <br></br>
                        <p className="timerText2">{this.formattedUTCText}</p>
                        <span className="infoText">UTC time</span>
                        <br></br>
                        <p>Duration: {this.nextGame.duration}</p>
                        <br></br>
                        <br></br>
                        <p>Players</p>
                        <p>{this.nextGame.players}</p>
                        <br></br>
                        <p>Info</p>
                        <p>{this.nextGame.description}</p>
                        <br></br>
                    </div>
                    <br></br>
                    <br></br>
                </div>

                <div className="gameList">
                    <div className="middleBreak">
                        <h2 id="comingGames">Upcoming games</h2>
                    </div>
                    <GameTable />
                </div>
                <div style={{ height: '100px' }} />
                
            </div>
        )
    }
}

export default hot(module)(App);
