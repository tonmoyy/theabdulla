import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <BrowserRouter>
                    <Navbar />
                   <Hero />
                   <Benefits />
                   <Collaboration />
                   <Services />
                   <Pricing />
                   <Roadmap />
                   <Footer />
                    </BrowserRouter>
            </div>
        </>
    );
};

export default App;
