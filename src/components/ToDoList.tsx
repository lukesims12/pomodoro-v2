import { Button, Paper, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IToDo } from "../interfaces/IToDo";

const ToDoList: FunctionComponent = () => {
      
    const [todos, setTodos] = useState<IToDo[]>([]);
    const [task, setTask] = useState<string>();

    const addToDo = () => setTodos((todos) => [...todos, {task: task, isCompleted: false}]);

    // const handleCompleteTask = () => {
    //     setTodos((todos) => [{task: task, isCompleted: true}]);
    // }

    useEffect(() => {
        console.log(todos);
    }, [todos])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2em 0', alignItems: 'center', flexDirection: 'row', gap: '1em', width: '100vw' }}>
            <Paper elevation={12} sx={{ padding: '.5em .75em', width: '30em', display: 'flex', alignItems: 'center', gap: '1em', backgroundColor: 'rgba(0,0,0,.2)' }}>
                <TextField onChange={(e) => setTask(e.target.value)} InputLabelProps={{ style: { color: '#FFF' } }} label="Add Task..." variant="standard" sx={{ width: '100%', input: { color: '#FFF' }, '& .MuiInput-underline:before': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:after': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:hover': { borderBottomColor: '#FFF' } }} />
                <Button onClick={addToDo} variant='contained' sx={{ '&:hover': { background: grey[800] }, background: grey[900] }}>ADD</Button>
            </Paper>
            <div style={{ color: '#FFF', padding: '.25em', backgroundColor: 'rgba(0,0,0,.2)', borderRadius: '.25em' }}>
                <div>{todos && todos?.map((e: IToDo) => (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em' }}>
                        {e.task} {e.isCompleted ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    </div>
                ))}</div>
            </div>
        </div>
    );
}

export default ToDoList;