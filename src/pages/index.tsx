import AboutMe from "./aboutMe";
import Home from "./home";

const MainPage = () => {
    return (
        <div className="flex flex-col gap-20 mt-10 mb-10">
            <Home />
            <AboutMe />
        </div>
    );
};

export default MainPage;
