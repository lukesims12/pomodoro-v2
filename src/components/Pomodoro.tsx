import { Button, Container, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";

const Pomodoro: FunctionComponent = () => {
    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);
    const time = `${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`;

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
        <Container>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{fontSize: '12em'}}>{time}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '1em'}}>
                <div><Button onClick={paused ? startTimer : pauseTimer} variant="contained" color={paused ? "primary" : "error"}>{paused ? "Start" : "Pause"}</Button></div>
                <div><Button onClick={resetTimer} variant="contained" color="primary">Reset</Button></div>
            </div>
        </Container>
    );
}

export default Pomodoro;