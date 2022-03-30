import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { FormatTime, MsToTime } from './services/helpers';

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
        } else {
            const userTime = FormatTime(this.nextGame.date, this.nextGame.duration, false);
            const UTCTime = FormatTime(this.nextGame.date, this.nextGame.duration, true);
            this.formattedMainText = `${userTime.day} ${userTime.mainText}`;
            this.formattedSecondText = userTime.secondText;
            this.formattedUTCText = UTCTime.mainText;
            this.formattedUTCSecondText = UTCTime.secondText;

            if (!this.state.timer) {
                /**
                 * Set the timer from the point of opening the site while staying there.
                 */ 
                this.state.startTime = Date.now();
                this.state.duration = new Date(this.nextGame.date).getTime() - Date.now();
                this.timer = window.setInterval(() => this.run(), 1000);
            }
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
          time: MsToTime(remaining)
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
                        <p className="timerText1">
                            <strong>{this.formattedMainText}</strong>
                        </p>
                        <p className="timerText2">{this.formattedSecondText}</p>
                        <p className="infoText">Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
                        <br/>
                        <p className="infoText">
                            UTC Time
                            <br/>
                            {this.formattedUTCText}
                            <br/>
                            {this.formattedUTCSecondText}
                        </p>
                        <br/>
                        <p>Duration: {this.nextGame.duration}</p>
                        <br/>
                        <p>Players</p>
                        <p>{this.nextGame.players}</p>
                        <br/>
                        <p>Info</p>
                        <p>{this.nextGame.description}</p>
                        <br/>
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
