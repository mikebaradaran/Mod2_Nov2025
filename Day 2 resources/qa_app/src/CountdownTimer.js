import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [endTime, setEndTime] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [displayTimer , setDisplayTimer] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            calculateRemainingTime(endTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    const calculateRemainingTime = (endTime) => {
        const distance = endTime - now();
        setRemainingTime(distance > 0 ? distance : 0);
    };

    const handleSetEndTime = (mins) => {
        setEndTime(now() + mins * 60000);  // mins to milliseconds
        setDisplayTimer(true);
    };

    const now = () => {
        return new Date().getTime();
    };

    function formatSeconds(seconds) {
        seconds /= 1000;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.ceil(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    return (
        <>
            <header>
                <stopWatch>
                    {!displayTimer ? <span>Start 9:30</span> : <span>Remaining Time:{formatSeconds(remainingTime)}</span> }
                    <div>
                        <button onClick={() => handleSetEndTime(15)}>15</button>
                        <button onClick={() => handleSetEndTime(20)}>20</button>
                        <button onClick={() => handleSetEndTime(30)}>30</button>
                        <button onClick={() => handleSetEndTime(60)}>60</button>
                    </div>
                </stopWatch>
                <course>
                    Responsive Web Development<br />
                </course>
                <trainer>
                    Mike Baradaran<br />
                    mike.baradaran@qa.com  
                </trainer>
                <a className="material" href="https://www.qa.com">Material</a>

            </header>
        </>
    );
};

export default CountdownTimer;
