import { IconButton, Popover } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import PaletteIcon from '@mui/icons-material/Palette';
import { red } from "@mui/material/colors";

interface ColourSelectorProps {
    handleColourChange: (selectedColour: string) => void
}
 
const ColourSelector: FunctionComponent<ColourSelectorProps> = ({handleColourChange}) => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const [colour, setColour] = useColor("hex", red[500]);
    
    useEffect(() => {
        handleColourChange(colour.hex);
    }, [colour])


    return ( 
        <>
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

        </>
    );
}
 
export default ColourSelector;