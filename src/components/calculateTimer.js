import React, { Component, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

class CalculateTimer extends Component {
    static propTypes = {
        dateFrom: PropTypes.string,
    }

  

    // calcDiffInMinutes(dateA, dateB){
    //     return Math.floor(((dateA.getTime() - dateB.getTime()) / 1000) % 60);
    // }
    
    // calculateDiff(dateFrom) {
    //     const [currentDate, setCurrentDate] = useState(new Date());
    //     const [minutesDiff, setMinutesDiff] = useState(
    //         calcDiffInMinutes(currentDate, dateFrom)
    //     );
    
    //     useEffect(() => {
    //         const timeoutId = setTimeout(() => {
    //             setCurrentDate(new Date());
    //         }, 1000);
    
    //         return () => clearTimeout(timeoutId);
    //     }, [currentDate]);
    
    //     useEffect(() => {
    //         setMinutesDiff(calcDiffInMinutes(currentDate, dateFrom));
    //     }, [currentDate, dateFrom]);
    
    //     return (
    //         <div>
    //             <div>Date From: {this.props.dateFrom.toISOString()}</div>
    //             <div>CountDown value: {minutesDiff}</div>
    //         </div>
    //     );
    // }
    renderEvents() {

    }

    render() {
        // const minutesDiff = this.calculateDiff(this.props.dateFrom);
        
        
        
        console.log('hephep ');
        console.log(this.props.dateFrom);
        
        return (
            // <script>{this.calculateDiff(this.props.dateFrom)}</script>
            <div>
                <div>Date From: {this.props.dateFrom.toISOString()}</div>
                <div>CountDown value: {minutesDiff}</div>
            </div>
        )
    }
}

export default CalculateTimer;
