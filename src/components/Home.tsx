import { red } from "@mui/material/colors";
import { FunctionComponent, useState } from "react";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import ToDoList from "./ToDoList";

const Home: FunctionComponent = () => {
    
    const [selectedColour, setSelectedColour] = useState<string>(red[600]);

    const handleColourChange = (selectedColour: string) => setSelectedColour(selectedColour);

    return(
        <>
            <Navbar selectedColour={selectedColour} handleColourChange={handleColourChange} />
            <Pomodoro colour={selectedColour} />
            {/* <ToDoList /> */}
        </>
    );
}

export default Home;