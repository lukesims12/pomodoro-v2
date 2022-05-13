import TimelapseIcon from '@mui/icons-material/Timelapse';
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
    
    return (
        <nav style={{ display: 'flex', flexDirection: 'row', padding: '1.25em'}}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5em', flexGrow: 1, fontWeight: '700', fontSize: '2em', textTransform: 'uppercase', letterSpacing: '.15em', color: '#FFF' }}>
                <TimelapseIcon sx={{fontSize: '1.25em'}} /> Pomotimer
            </Typography>
        </nav>
    );
}

export default Navbar;