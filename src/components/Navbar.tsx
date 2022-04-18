import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { red } from '@mui/material/colors';

const Navbar: FunctionComponent = () => {
    return (
        <AppBar position="static" sx={{ background: red[600]}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pomodoro
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;