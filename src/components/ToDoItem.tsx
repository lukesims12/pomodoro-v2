import { FunctionComponent } from "react";
import { IToDo } from "../interfaces/IToDo";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ToDoItemProps {
    index: number;
    todo: IToDo;
    completeToDo: (index: number) => void
}

const ToDoItem: FunctionComponent<ToDoItemProps> = ({todo, index, completeToDo}) => {
    return (
        <div onClick={() => completeToDo(index)} style={{ textDecoration: todo.isCompleted ? "line-through" : "", display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em', padding: '.5em .75em', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,.2)', height: '3em', marginTop: '1em' }}>
            {todo.task} {todo.isCompleted ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </div>
    );
}

export default ToDoItem;