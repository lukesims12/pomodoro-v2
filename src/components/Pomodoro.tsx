import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Container } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import { FunctionComponent, useEffect, useState } from "react";
import TimeSelection from "./TimeSelection";

interface IPomodoroProps {
    colour: string
}

const Pomodoro: FunctionComponent<IPomodoroProps> = ({colour}) => {

    const [paused, setPaused] = useState(true);
    const [[mins, secs], setTime] = useState([25, 0]);   
    const time = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const startTimer = () => setPaused(false);
    const pauseTimer = () => setPaused(true);
    const resetTimer = () => {
        setPaused(true);
        setTime([25, 0]);
    }

    const handleSetTime = (mins: number, secs: number) => setTime([mins, secs]);

    const tick = () => {
        if (mins === 0 && secs === 0) {
            clearInterval();
            setPaused(true);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => {if (!paused) tick()}, 1000);
        return () => clearInterval(timerId);
    });
    
    useEffect(() => {
        document.title = `${mins}m ${secs}s left!`;
        if (mins === 0 && secs <= 59 && secs >= 1) document.title = `${secs} seconds left!`;
        if (mins === 0 && secs === 0) document.title = `Time's up!`;
    }, [startTimer])

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '1em'}}>
                <div style={{fontSize: '10em', fontFamily: 'Roboto Slab', fontWeight: '500', color: '#FFF', padding: '.25em', backgroundColor: 'rgba(0,0,0,.2)' }}>
                    {time}
                </div> 
            </div>
            <TimeSelection handleSetTime={handleSetTime} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em', marginTop: '1em'}}>
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
                    sx={{'&:hover': {background: red[500]}, background: red[700]}}
                >
                    Reset
                </Button>
            </div>
        </Container>
    );
}

export default Pomodoro;