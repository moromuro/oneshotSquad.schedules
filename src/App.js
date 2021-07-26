import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { hot } from 'react-hot-loader';
import './App.css';

import GameTable from './components/gameTable';
import Test from './components/test';
import CalculateTimer from './components/calculateTimer';

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
            duration: 2 * 60 * 1000,
        }
        this.startTimer = this.start.bind(this);
        this.nextGame = {
            date: new Date('2021-07-27T20:15:00'),
            players: 'Player1, player2, player3',
            description: 'lirum larm',
        }
    }

    msToTime(duration) {
        let milliseconds = parseInt((duration % 1000));
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
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
        if (!this.state.timer) {
            this.state.startTime = Date.now();
            this.state.duration = this.nextGame.date.getTime() - Date.now();
            this.timer = window.setInterval(() => this.run(), 1000);
        }
    }

    run() {
        console.log('start time ',this.state.startTime);
        const diff = Date.now() - this.state.startTime;
        console.log('diff', diff);
        // If you want to count up
        // this.setState(() => ({
        //  time: this.msToTime(diff)
        // }));
        
        // count down
        let remaining = this.state.duration - diff;
        // const nextGameTime = this.nextGame.date.getTime();
        // console.log(nextGameTime);

        // let remaining = nextGameTime - Date.now();
        console.log('remaining ', remaining);

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

    render() {
        return (
            <div className="App">
                {this.startTimer()}
                <div className="timer">
                    <h3>Next Game in:</h3>
                    <p>{this.state.time.hours} : {this.state.time.minutes} : {this.state.time.seconds}</p>
                    <p>{this.nextGame.players}</p>
                    <p>{this.nextGame.description}</p>
                    <p>Game time: {this.nextGame.date.toLocaleString()}</p>
                </div>
                <h1>hello</h1>


                {/* <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="test">
                                <p>hello</p>
                                <GameTable 
                                    game="test name"
                                    names={["1", "2"]}
                                    time={new Date()}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                <div style={{ height: '100px' }} />
            </div>
        )
    }
}

export default hot(module)(App);
