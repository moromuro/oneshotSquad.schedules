import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { FormatTime } from './services/helpers';

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
            formattedUTCText: '',
            formattedSecondText: '',
            formattedUTCSecondText: ''
        }
        this.startTimer = this.start.bind(this);
        this.nextGame = {};
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
     */
    start() {        
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

        if (!Object.keys(this.nextGame).length) {
            this.formattedMainText = 'No upcoming games.';
            this.formattedSecondText = 'Waiting new games to be scheduled.';
            this.formattedUTCText = '-';
            this.formattedUTCSecondText = '-';
            this.nextGame = {
                date: null,
                duration: "0h",
                players: "~~",
                description: "~~"
            };

            this.state.timer = '0:0:0';
        } else if (!this.state.timer) {
            /**
             * Set the timer from the point of opening the site while staying there.
             */ 
            this.state.startTime = Date.now();
            this.state.duration = new Date(this.nextGame.date).getTime() - Date.now();
            this.timer = window.setInterval(() => this.run(), 1000);
        }
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
                        <p className="timerText2">{this.formattedSecondText}</p>
                        <span className="infoText">Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
                        <br></br>
                        <p className="timerText2">{this.formattedUTCText}</p>
                        <p className="timerText2">{this.formattedUTCSecondText}</p>
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
