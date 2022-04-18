import { Container, Paper, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const ToDoList: FunctionComponent = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', margin : '2em 0', alignItems: 'center', flexDirection: 'row'}}>
            <Paper elevation={12} sx={{padding: '.5em .75em', width: '30em'}}>
                <Typography variant="h6">ToDo Item 1</Typography>
                <TextField id="standard-basic" label="Standard" variant="standard" sx={{width: '100%'}} />
            </Paper>
        </div>
    );
}

export default ToDoList;