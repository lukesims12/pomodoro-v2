import { Button, Container } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { green, red } from "@mui/material/colors";

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
            if (!paused) setSeconds(s => s - 1);
        }, 1000);
        return () => { clearInterval(int) };
    }, [paused]);

    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{fontSize: '12em', fontFamily: 'Roboto Slab', fontWeight: '500'}}>{time}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '1em'}}>
                <Button 
                    onClick={paused ? startTimer : pauseTimer} 
                    endIcon={paused ? <PlayCircleOutlineIcon /> : <PauseCircleOutlineIcon />} 
                    variant="contained" 
                    sx={{'&:hover': {background: paused ? green[700] : red[500]}, background: paused ? green[800] : red[600]}}
                >
                    {paused ? "Start" : "Pause"}
                </Button>
                <Button 
                    onClick={resetTimer} 
                    variant="contained" 
                    endIcon={<RestartAltIcon />}
                    sx={{'&:hover': {background: red[500]}, background: red[600]}}
                >
                    Reset
                </Button>
            </div>
        </Container>
    );
}

export default Pomodoro;