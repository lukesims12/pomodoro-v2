import { Badge, Button, Grid, Paper, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IToDo } from "../interfaces/IToDo";

const ToDoList: FunctionComponent = () => {

    const [todos, setTodos] = useState<IToDo[]>([]);
    const [task, setTask] = useState<string>();

    const addToDo = () => setTodos((todos) => [...todos, { task: task, isCompleted: false }]);

    // const handleCompleteTask = () => {
    //     setTodos((todos) => [{task: task, isCompleted: true}]);
    // }

    useEffect(() => {
        console.log(todos);
    }, [todos])

    return (
        <Grid container sx={{ width: '100vw', textAlign: 'center', margin: '1em' }}>
            <Grid item xs={6}>
                <div style={{color: '#FFF'}}>Tasks: {todos.length}</div>
                <Badge badgeContent={"WIP"} sx={{
                    "& .MuiBadge-badge": {
                        color: "#FFF",
                        backgroundColor: "#FFC107"
                    }
                }}
                >
                    <Paper elevation={12} sx={{ padding: '.5em .75em', width: '30em', display: 'flex', alignItems: 'center', gap: '1em', backgroundColor: 'rgba(0,0,0,.2)' }}>
                        <TextField onChange={(e) => setTask(e.target.value)} InputLabelProps={{ style: { color: '#FFF' } }} label="Add Task..." variant="standard" sx={{ width: '100%', input: { color: '#FFF' }, '& .MuiInput-underline:before': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:after': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:hover': { borderBottomColor: '#FFF' } }} />
                        <Button onClick={addToDo} variant='contained' sx={{ '&:hover': { background: grey[800] }, background: grey[900] }}>ADD</Button>
                    </Paper>
                </Badge>
            </Grid>
            <Grid item xs={6}>
                <div style={{ color: '#FFF', borderRadius: '.25em', width: '30em' }}>
                    {todos.length === 0 &&
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em', padding: '.5em .75em', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,.2)', height: '3em', marginTop: '1em' }}>
                            Tasks will appear here...
                        </div>
                    }
                    <div>{todos && todos?.map((e: IToDo) => (
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em', padding: '.5em .75em', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,.2)', height: '3em', marginTop: '1em' }}>
                            {e.task} {e.isCompleted ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                        </div>
                    ))}</div>
                </div>
            </Grid>
        </Grid>
    );
}

export default ToDoList;