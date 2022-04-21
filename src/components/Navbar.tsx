import { AppBar, Toolbar, IconButton, Typography, Button, Popover } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { red } from '@mui/material/colors';
import PaletteIcon from '@mui/icons-material/Palette';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Navbar: FunctionComponent = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [colour, setColour] = useColor("hex", red[600]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        setColour(colour);
    }, [colour])

    return (
        <AppBar position="static" sx={{ background: colour.hex}}>
            <Toolbar>
                <Typography sx={{ flexGrow: 1, fontWeight: '700', fontSize: '1.1em', textTransform: 'uppercase', letterSpacing: '.15em' }}>
                    Pomodoro
                </Typography>
                <IconButton onClick={handleClick}>
                    <PaletteIcon sx={{color: '#FFF'}} />
                </IconButton>   
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <ColorPicker width={350} height={150} color={colour} onChange={setColour} hideHSV hideRGB dark />                
                </Popover>         
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;