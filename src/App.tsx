import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderLayout from "./components/HeaderLayout";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobremi" element={<AboutMe />} />
                    <Route path="/servicios" element={<ServicesPage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
