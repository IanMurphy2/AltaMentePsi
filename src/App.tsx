import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderLayout from "./components/HeaderLayout";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobremi" element={<AboutMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
