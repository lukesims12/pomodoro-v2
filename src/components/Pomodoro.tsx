import { Button, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";

const Pomodoro: FunctionComponent = () => {
    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);

    const startTimer = () => setPaused(false);
    const pauseTimer = () => setPaused(true);

    const resetTimer = () => {
        setPaused(true);
        setSeconds(25 * 60);
    }

    useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => s - 1);
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, [paused]);

    return (
        <>
            <div className="timer-outer">
                <div className="timer-number">{`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}</div>
            </div>
            <div className="control-bar-outer">
                <div className="btn-cb"><Button onClick={paused ? startTimer : pauseTimer} variant="contained" color="primary">{paused ? "Start" : "Pause"}</Button></div>
                <div className="btn-cb"><Button onClick={resetTimer} variant="contained" color="primary">Reset</Button></div>
            </div>
        </>
    );
}

export default Pomodoro;