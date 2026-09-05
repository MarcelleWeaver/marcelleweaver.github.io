
import { BrowserRouter, Routes, Route,HashRouter } from "react-router";
import AboutMe from "./aboutMe";
import Art from "./art";
import Design from "./design";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route  path="/" element={<Art />} />
                    <Route  path="/art" element={<Art />} />

                    <Route  path="/design" element={<Design />} />
                    <Route  path="/aboutMe" element={<AboutMe />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;