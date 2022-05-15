import { red } from "@mui/material/colors";
import { FunctionComponent } from "react";
import { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import Settings from "./Settings";
import ToDoList from "./ToDoList";

const Home: FunctionComponent = () => {

    const [colour, setColour] = useColor("hex", red[500]);

    return (
        <div style={{ background: colour.hex, height: '100vh' }}>
            <Navbar />
            <Pomodoro />
            <ToDoList />
            <Settings colour={colour} setColour={setColour} />
        </div>
    );
}

export default Home;