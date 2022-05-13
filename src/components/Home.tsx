import { Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import { FunctionComponent, useState } from "react";
import "react-color-palette/lib/css/styles.css";
import ColourSelector from "./ColourSelector";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";

const Home: FunctionComponent = () => {

    const [selectedColour, setSelectedColour] = useState<string>(red[600]);

    const handleColourChange = (selectedColour: string) => setSelectedColour(selectedColour);

    return (
        <div style={{ background: selectedColour, height: '100vh' }}>
            <Navbar />
            <Pomodoro colour={selectedColour} />
            {/* <ToDoList /> */}
            <Fab variant="extended" sx={{backgroundColor: 'rgba(0,0,0,.2)', position: 'absolute', bottom: '2em', right: '2em', color: '#FFF', display: 'flex', alignItems: 'center'}}>
                <ColourSelector handleColourChange={handleColourChange} />
                Colour Picker
            </Fab>
        </div>
    );
}

export default Home;