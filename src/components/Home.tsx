import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import ToDoList from "./ToDoList";

const Home: FunctionComponent = () => {
    return(
        <>
            <Navbar />
            <Pomodoro />
            {/* <ToDoList /> */}
        </>
    );
}

export default Home;