import { Fab, Popover } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { FunctionComponent, useState } from "react";
import { Color, ColorPicker, useColor } from "react-color-palette";
import PaletteIcon from '@mui/icons-material/Palette';
import { SetStateAction } from "react";

interface SettingsProps {
    colour: Color,
    setColour: React.Dispatch<SetStateAction<Color>>
}

const Settings: FunctionComponent<SettingsProps> = ({colour, setColour}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <Fab variant="extended" onClick={handleClick} sx={{ '&:hover': { background: grey[900] }, backgroundColor: 'rgba(0,0,0,.2)', position: 'absolute', bottom: '2em', right: '2em', color: '#FFF', display: 'flex', alignItems: 'center' }}>
                <PaletteIcon sx={{ color: '#FFF' }} />&nbsp;Colour Picker
            </Fab>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <ColorPicker width={350} height={150} color={colour} onChange={setColour} hideHSV hideRGB dark />
            </Popover>
        </>

    );
}

export default Settings;