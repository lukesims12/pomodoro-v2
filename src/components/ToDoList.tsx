import { Badge, Button, Paper, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent, useEffect, useState } from "react";
import { IToDo } from "../interfaces/IToDo";
import ToDoItem from "./ToDoItem";

const ToDoList: FunctionComponent = () => {

    const [todos, setTodos] = useState<IToDo[]>([]);
    const [task, setTask] = useState<string>();

    const addToDo = () => setTodos((todos) => [...todos, { task: task, isCompleted: false }]);

    const completeToDo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    return (
        <div style={{ width: '100vw', marginTop: '1em', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '4em' }}>
            <div>
                <div style={{ color: '#FFF' }}>Tasks: {todos.length}</div>
                <Paper elevation={12} sx={{ padding: '.5em .75em', width: '30em', display: 'flex', alignItems: 'center', gap: '1em', backgroundColor: 'rgba(0,0,0,.2)' }}>
                    <TextField onChange={(e) => setTask(e.target.value)} InputLabelProps={{ style: { color: '#FFF' } }} label="Add Task..." variant="standard" sx={{ width: '100%', input: { color: '#FFF' }, '& .MuiInput-underline:before': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:after': { borderBottomColor: '#FFF' }, '& .MuiInput-underline:hover': { borderBottomColor: '#FFF' } }} />
                    <Button onClick={addToDo} variant='contained' sx={{ '&:hover': { background: grey[800] }, background: grey[900] }}>ADD</Button>
                </Paper>
            </div>
            <div>
                <div style={{ color: '#FFF', borderRadius: '.25em', width: '30em' }}>
                    {todos.length === 0 &&
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em', padding: '.5em .75em', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,.2)', height: '3em', marginTop: '1em' }}>
                            Tasks will appear here...
                        </div>
                    }
                    <div style={{ height: '50vh', overflowY: todos.length >= 8 ? 'scroll' : 'hidden' }}>{todos && todos?.map((e: IToDo, index: number) => (
                        <ToDoItem key={index} index={index} completeToDo={completeToDo} todo={e} />
                    ))}</div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;