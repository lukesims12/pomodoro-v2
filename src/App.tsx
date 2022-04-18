import { FunctionComponent } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"

const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
