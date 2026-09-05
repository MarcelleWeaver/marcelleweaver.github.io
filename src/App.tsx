
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Art from "./art";
import Design from "./design";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Art />} />
                    <Route  path="/art" element={<Art />} />

                    <Route  path="/design" element={<Design />} />
                    <Route  path="/aboutMe" element={<AboutMe />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;