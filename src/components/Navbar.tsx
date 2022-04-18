import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { red } from '@mui/material/colors';

const Navbar: FunctionComponent = () => {
    return (
        <AppBar position="static" sx={{ background: red[600]}}>
            <Toolbar>
                <Typography sx={{ flexGrow: 1, fontWeight: '700', fontSize: '1.1em', textTransform: 'uppercase', letterSpacing: '.15em' }}>
                    Pomodoro
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;