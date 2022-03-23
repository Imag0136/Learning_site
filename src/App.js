import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import UseState from "./pages/UseState";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
            <Routes>
                <Route path="/" element={<Main/>}>
                </Route>
                <Route path="/useState" element={<UseState/>}>
                </Route>
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
