import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent } from "react";
import AvTimerIcon from '@mui/icons-material/AvTimer';

interface TimeSelectionProps {
    handleSetTime: (mins: number, secs: number) => void;
}
 
const TimeSelection: FunctionComponent<TimeSelectionProps> = ({handleSetTime}) => {
    return ( 
        <div style={{display: 'flex', justifyContent: 'center', gap: '1em'}}>
        <Button 
            onClick={() => handleSetTime(25,0)} 
            variant="contained" 
            sx={{'&:hover': {background: grey[800]}, background: grey[900]}}
        >
            Pomodoro [25M]
        </Button>
        <Button 
            onClick={() => handleSetTime(5,0)} 
            variant="contained" 
            sx={{'&:hover': {background: grey[800]}, background: grey[900]}}
        >
            Short Break [5M]
        </Button>
        <Button 
            onClick={() => handleSetTime(15,0)} 
            variant="contained" 
            sx={{'&:hover': {background: grey[800]}, background: grey[900]}}
        >
            Long Break [15M]
        </Button>
    </div>
);
}
 
export default TimeSelection;