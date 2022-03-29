import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import UseState from "./pages/UseState";
import NavBar from "./components/NavBar";
import OperatorPrecedence from "./pages/OperatorPrecedence";
import LogicalOperators from "./pages/LogicalOperators";
import Loops from "./pages/Loops";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/useState" element={<UseState/>}/>
                    <Route path="/OperatorPrecedence" element={<OperatorPrecedence/>}/>
                    <Route path="/LogicalOperators" element={<LogicalOperators/>}/>
                    <Route path="/Loops" element={<Loops/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
