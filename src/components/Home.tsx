import { Fab, IconButton, Popover } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { FunctionComponent, useState } from "react";
import "react-color-palette/lib/css/styles.css";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import PaletteIcon from '@mui/icons-material/Palette';
import { ColorPicker, useColor } from "react-color-palette";

const Home: FunctionComponent = () => {

    const [selectedColour, setSelectedColour] = useState<string>(red[600]);

    const handleColourChange = (selectedColour: string) => setSelectedColour(selectedColour);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const [colour, setColour] = useColor("hex", red[500]);
    

    return (
        <div style={{ background: colour.hex, height: '100vh' }}>
            <Navbar />
            <Pomodoro colour={colour.hex} />
            {/* <ToDoList /> */}
            <Fab variant="extended" onClick={handleClick} sx={{'&:hover': {background: grey[900]}, backgroundColor: 'rgba(0,0,0,.2)', position: 'absolute', bottom: '2em', right: '2em', color: '#FFF', display: 'flex', alignItems: 'center'}}>
                <PaletteIcon sx={{color: '#FFF'}} />&nbsp;Colour Picker
            </Fab>   
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <ColorPicker width={350} height={150} color={colour} onChange={setColour} hideHSV hideRGB dark />                
            </Popover>         
        </div>
    );
}

export default Home;