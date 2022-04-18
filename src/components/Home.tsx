import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";

const Home: FunctionComponent = () => {
    return(
        <>
            <Navbar />
            <Pomodoro />
        </>
    );
}

export default Home;