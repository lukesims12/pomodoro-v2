import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent } from "react";
import AvTimerIcon from '@mui/icons-material/AvTimer';

interface TimeSelectionProps {
    handleSetTime: (mins: number, secs: number) => void;
}
 
const TimeSelection: FunctionComponent<TimeSelectionProps> = ({handleSetTime}) => {
    return ( 
        <div style={{display: 'flex', justifyContent: 'center', gap: '1em', margin: '1em 0'}}>
        <Button 
            onClick={() => handleSetTime(15,0)} 
            variant="contained" 
            endIcon={<AvTimerIcon />}
            sx={{'&:hover': {background: grey[900]}, background: grey[900]}}
        >
            15 mins
        </Button>
        <Button 
            onClick={() => handleSetTime(10,0)} 
            variant="contained" 
            endIcon={<AvTimerIcon />}
            sx={{'&:hover': {background: grey[900]}, background: grey[900]}}
        >
            10 mins
        </Button>
        <Button 
            onClick={() => handleSetTime(5,0)} 
            variant="contained" 
            endIcon={<AvTimerIcon />}
            sx={{'&:hover': {background: grey[900]}, background: grey[900]}}
        >
            5 mins
        </Button>
    </div>
);
}
 
export default TimeSelection;