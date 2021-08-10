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
        }
        this.startTimer = this.start.bind(this);
        this.nextGame = [];
    }

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
    }

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

    renderGameTable() {
        return(
            <GameTable />
        )
    }

    render() {
        return (
            <div className="App">
                {this.startTimer()}
                <div className="description-header card">
                    <h1>ONESHOT SQUAD</h1>
                    <p>Games listed under are fanmade and updated at random times.</p>
                    <p>With issues regarding games, contact Moro on the discord channel.</p>
                    <h3>Ths site is still very much WIP and backend guy is in charge of design as you can see. :suffer:</h3>
                </div>
                <div className="timer card">
                    <div className="bigTimerCard">
                        <p className="bigTimerLabel">Next Game in</p>
                        <p className="bigTimer">
                            <strong>
                                {this.state.time.hours} : {this.state.time.minutes} : {this.state.time.seconds}
                            </strong>
                        </p>
                    </div>
                    
                    <br></br>
                    <p className="timerText"><strong>{new Date(this.nextGame.date).toLocaleString('en-gb', { dateStyle: 'medium', timeStyle: 'long'})}</strong></p>
                    <span className="infoText">Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
                    <br></br>
                    <p className="timerText">{this.nextGame.date.toString('en-gb')}</p>
                    <span className="infoText">UTC time</span>
                    <br></br>
                    <br></br>
                    <p>Players</p>
                    <p>{this.nextGame.players}</p>
                    <br></br>
                    <p>Description</p>
                    <p>{this.nextGame.description}</p>
                    <br></br>
                </div>

                <div className="gameList">
                    <div className="middleBreak">
                        <h2 id="comingGames">Gamelist</h2>
                    </div>
                    {this.renderGameTable()}
                </div>
                <div style={{ height: '100px' }} />
                
            </div>
        )
    }
}

export default hot(module)(App);
