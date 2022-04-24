import { AppBar, Toolbar, IconButton, Typography, Button, Popover } from "@mui/material";
import { FunctionComponent, SetStateAction, useEffect, useState } from "react";
import { red } from '@mui/material/colors';
import PaletteIcon from '@mui/icons-material/Palette';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import TimelapseIcon from '@mui/icons-material/Timelapse';

interface INavbarProps {
    selectedColour: string,
    handleColourChange: (selectedColour: string) => void
}

const Navbar: FunctionComponent<INavbarProps> = ({ selectedColour, handleColourChange }) => {
    
    const [colour, setColour] = useColor("hex", red[600]);
    
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        handleColourChange(colour.hex);
    }, [colour])

    return (
        <AppBar position="static" sx={{ background: selectedColour}}>
            <Toolbar>
                <Typography sx={{ display: 'flex', gap: '.5em', flexGrow: 1, fontWeight: '700', fontSize: '1.1em', textTransform: 'uppercase', letterSpacing: '.15em' }}>
                    <TimelapseIcon /> Pomodoro
                </Typography>
                <IconButton onClick={handleClick}>
                    <PaletteIcon sx={{color: '#FFF'}} />
                </IconButton>   
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <ColorPicker width={350} height={150} color={colour} onChange={setColour} hideHSV hideRGB dark />                
                </Popover>         
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;